import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import bcrypt from 'bcrypt';
import session from 'express-session';
import cookieParser from 'cookie-parser';

const app = express();
const encoder = bodyParser.urlencoded({ extended: true });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));

app.use(cookieParser());

app.use(session({
    secret: 'hilal123',
    resave: false,
    saveUninitialized: false,
}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '001234',
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

app.get("/admin", function(req, res){
    res.sendFile(path.join(__dirname, 'public/html', 'admin.html'));
});

app.get("/user", function(req, res){
    res.sendFile(path.join(__dirname, 'public/html', 'user.html'));
});

app.post("/login", encoder, async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    connection.query("SELECT * FROM users WHERE email = ?", [email], async function(error, results, fields) {
        if (error) {
            console.log(error);
            res.status(500).send("Internal Server Error");
            return;
        }

        if (results.length > 0) {
            const user = results[0];
            try {
                const isMatch = await bcrypt.compare(password, user.password);

                if (isMatch) {
                    req.session.userId = user.id;
                    req.session.username = user.username;
                    req.session.email = user.email;

                    if (email === "admin@gmail.com") {
                        res.redirect("/admin");
                    } else {
                        res.redirect("/user");
                    }
                } else {
                    res.redirect("/login");
                }
            } catch (err) {
                console.error("Bcrypt compare error:", err);
                res.status(500).send("Internal Server Error");
            }
        } else {
            res.redirect("/login");
        }
    });
});

app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Session destruction error:", err);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.redirect("/login");
    });
});

app.use((req, res, next) => {
    if (req.session.userId) {
        next();
    } else {
        res.redirect("/login");
    }
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
        res.redirect("/login");
    });
});

const PORT = process.env.PORT || 5501;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});