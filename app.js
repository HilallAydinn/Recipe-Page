import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import bcrypt from 'bcrypt';
import session from 'express-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

const app = express();

app.use(session({
  secret: 'hilal1',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 1 gün
  }
}));

app.use(bodyParser.json());
const encoder = bodyParser.urlencoded({ extended: true });
app.use(encoder);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));

app.use(passport.initialize());
app.use(passport.session());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'recipes_db'
});

connection.connect(function(error){
    if(error){
        throw error;
    } else {
        console.log('MySQL database connected successfully.');
    }
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, 'public/html', 'index.html'));
});

app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, 'public/html', 'login.html'));
});

app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname, 'public/html', 'register.html'));
});

app.get("/favorites", function(req, res){
    res.sendFile(path.join(__dirname, 'public/html', 'favorites.html'));
});

app.get("/profile", function(req, res){
  res.sendFile(path.join(__dirname, 'public/html', 'profile.html'));
});

app.get("/main", (req, res) => {
  if(req.isAuthenticated()) {
    res.sendFile(path.join(__dirname, 'public/html', 'user.html'));
  } else {
    res.sendFile(path.join(__dirname, 'public/html', 'index.html'));
  }
})

app.post("/logout", (req, res) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.clearCookie('connect.sid');
      console.log('Logout successful');
      res.redirect("/");
    });
});

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.clearCookie('connect.sid');
    console.log('Logout successful');
    res.redirect("/");
  });
});

app.get("/admin", (req, res) => {
    if (req.isAuthenticated()) {
      if(req.email === "admin@gmail.com") {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        res.sendFile(path.join(__dirname, 'public/html', 'admin.html'));
      } else {
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
    }
});

app.get("/user", (req, res) => {
    if (req.isAuthenticated()) {
        res.sendFile(path.join(__dirname, 'public/html', 'user.html'));
    } else {
      res.redirect("/login");
    }
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
      if (err) {
          console.error("Authentication error:", err);
          return next(err);
      }
      if (!user) {
          console.log("Authentication failed:", info);
          return res.status(401).json({ message: info.message });
      }
      req.logIn(user, (err) => {
          if (err) {
              console.error("Login error:", err);
              return next(err);
          }
          console.log("Login successful");
          if (user.email === 'admin@gmail.com') {
              return res.status(200).json({ redirect: '/admin' });
          } else {
              return res.status(200).json({ redirect: '/user' });
          }
      });
  })(req, res, next);
});

  
app.post("/register", encoder, async function(req, res){
    const username = req.body.username;
    const email = req.body.email;
    const plainPassword = req.body.password;
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    connection.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, hashedPassword], function(error, results, fields){
        if(error){
            console.log(error);
            res.status(500).send("Internal Server Error");
            return;
        }
        return res.status(200).json({ redirect: '/login' });
    });
});

passport.use(new LocalStrategy(
  {
      usernameField: 'email',
      passwordField: 'password'
  },
  async function verify(email, password, cb) {
      try {
          connection.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
              if (err) {
                  console.error("Database query error:", err);
                  return cb(err);
              }
              if (results.length > 0) {
                  const user = results[0];
                  const storedHashedPassword = user.password;
                  const valid = await bcrypt.compare(password, storedHashedPassword);
                  if (valid) {
                      return cb(null, user);
                  } else {
                      return cb(null, false, { message: 'Incorrect password' });
                  }
              } else {
                  return cb(null, false, { message: 'User not found' });
              }
          });
      } catch (err) {
          console.error("Error in strategy:", err);
          return cb(err);
      }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  connection.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err) return done(err);
    done(null, results[0]);
  });
});

app.post('/api/favorites/add', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const userId = req.user.id;
  const recipeId = req.body.recipeId;

  if (!userId || !recipeId) {
    return res.status(400).json({ message: 'Missing user ID or recipe ID' });
  }

  const query = 'INSERT INTO favorites (user_id, recipe_id) VALUES (?, ?)';

  connection.query(query, [userId, recipeId], (error, results) => {
    if (error) {
      console.error('Error adding to favorites:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.status(200).json({ message: 'Recipe added to favorites successfully' });
  });
});

app.delete('/api/favorites/remove', (req, res) => {
  const userId = req.user.id;
  const recipeId = req.body.recipeId;

  const query = 'DELETE FROM favorites WHERE user_id = ? AND recipe_id = ?';

  connection.query(query, [userId, recipeId], (error, results) => {
    if (error) {
      console.error('Error removing from favorites:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.status(200).json({ message: 'Recipe removed from favorites successfully' });
  });
});

app.get('/api/favorites', (req, res) => {
  const userId = req.user.id;
  const query = 'SELECT recipe_id FROM favorites WHERE user_id = ?';

  connection.query(query, [userId], (error, results) => {
    if (error) {
      console.error('Error fetching favorites:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.status(200).json(results);
  });
});

app.get('/api/profile', (req, res) => {
  if (!req.isAuthenticated()) {
      return res.status(401).json({ message: 'Unauthorized' });
  }

  const user = req.user;
  const hiddenPassword = '***';
  res.status(200).json({
      email: user.email,
      username: user.username,
      password: hiddenPassword
  });
});

app.patch('/api/profile/username', (req, res) => {
  if (!req.isAuthenticated()) {
      return res.status(401).json({ message: 'Unauthorized' });
  }

  const newUsername = req.body.username;
  const userId = req.user.id;

  const query = 'UPDATE users SET username = ? WHERE id = ?';

  connection.query(query, [newUsername, userId], (error, results) => {
      if (error) {
          console.error('Error updating username:', error);
          return res.status(500).json({ message: 'Internal Server Error' });
      }
      res.status(200).json({ username: newUsername });
  });
});

app.patch('/api/profile/password', async function(req, res) {
  if (!req.isAuthenticated()) {
      return res.status(401).json({ message: 'Unauthorized' });
  }

  const { currentPassword, newPassword } = req.body;
  const userId = req.user.id;
  const userPassword = req.user.password;

  try {
      const match = await bcrypt.compare(currentPassword, userPassword);
      if (!match) {
          return res.status(400).json({ message: 'Current password is incorrect' });
      }
    
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      const query = 'UPDATE users SET password = ? WHERE id = ?';
    
      connection.query(query, [hashedPassword, userId], (error, results) => {
          if (error) {
              console.error('Error updating password:', error);
              return res.status(500).json({ message: 'Internal Server Error' });
          }
          return res.status(200).json({ message: 'Password updated successfully' });
      });
  } catch (error) {
      console.error('Error updating password:', error);
      return res.status(500).json({ message: 'Server error', error });
  }
});

app.post('/api/comments/add', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const username = req.user.username;
  const questionId = req.body.question_id;
  const comment_text = req.body.comment_text;

  if (!username || !questionId || !comment_text) {
    return res.status(400).json({ message: 'Missing username, question ID, or comment text' });
  }

  const query = 'INSERT INTO comments (question_id, commenter, text) VALUES (?, ?, ?)';

  connection.query(query, [questionId, username, comment_text], (error, results) => {
    if (error) {
      console.error('Error adding to comments:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.status(200).json({ message: 'Comment added successfully' });
  });
});

const PORT = process.env.PORT || 5501;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
