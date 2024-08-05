import express from 'express';
import db from '../../db.js';
import cors from 'cors'; 

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/recipes', (req, res) => {
    const sql = 'SELECT * FROM recipes';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/recipes/id/:id', (req, res) => {
    const recipeId = req.params.id;
    const sql = 'SELECT * FROM recipes WHERE id = ?';
    db.query(sql, [recipeId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.json(results[0]);
    });
});

app.get('/recipes/category/:category', (req, res) => {
  const recipeCategory = req.params.category;
  const sql = 'SELECT id FROM recipes WHERE category = ?';
  db.query(sql, [recipeCategory], (err, results) => {
    if (err) {
        return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
        return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(results);
  });
});

app.get('/recipes/title/:title', (req, res) => {
  const recipeTitle = req.params.title;
  const sql = 'SELECT * FROM recipes WHERE title = ?';
  db.query(sql, [recipeTitle], (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      if (results.length === 0) {
          return res.status(404).json({ error: 'Recipe not found' });
      }
      res.json(results[0]);
  });
});

app.get('/search', (req, res) => {
  const searchWord = req.query.q;
  const sql = 'SELECT * FROM recipes WHERE title LIKE ?';
  db.query(sql, [`%${searchWord}%`], (err, results) => {
    if (err) throw err;
    res.json(results)
  });
});

app.get('/api/recipe-counts', (req, res) => {
  const sql = 'SELECT category, COUNT(*) AS count FROM recipes GROUP BY category';
  db.query(sql, (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.json(results);
  });
});

app.get('/api/most-viewed', (req, res) => {
  const sql = 'SELECT id, title, img, views FROM recipes ORDER BY views DESC LIMIT 4';
  db.query(sql, (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.json(results);
  });
});

app.get('/api/last-registered-users', (req, res) => {
  const sql = 'SELECT username, email, date FROM users ORDER BY date DESC LIMIT 5';
  db.query(sql, (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.json(results);
  });
});

app.get('/api/total-users', (req, res) => {
  const sql = 'SELECT COUNT(*) AS totalUsers FROM users';
  db.query(sql, (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.json(results[0]);
  });
});

app.get('/api/total-views', (req, res) => {
  const sql = 'SELECT SUM(views) AS totalViews FROM recipes';
  db.query(sql, (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.json(results[0]);
  });
});

app.post('/recipes', (req, res) => {
  const { title, img, ingredients, instructions, category } = req.body;
  const sql = 'INSERT INTO recipes (title, img, ingredients, instructions, category, addedDate) VALUES (?, ?, ?, ?, ?, NOW())';
  db.query(sql, [title, img, ingredients, instructions, category], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Recipe added successfully', id: result.insertId});
  });
});

app.post('/api/increase-views', (req, res) => {
  const recipeId = req.body.id;

  db.query('UPDATE recipes SET views = views + 1 WHERE id = ?', [recipeId], (err, results) => {
      if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Database query failed' });
      }

      db.query('SELECT views FROM recipes WHERE id = ?', [recipeId], (err, results) => {
          if (err) {
              console.error(err);
              return res.status(500).json({ error: 'Database query failed' });
          }

          res.json({ views: results[0].views });
      });
  });
});

app.delete('/recipes', (req, res) => {
  const title = req.body.title;
  const sql = 'DELETE FROM recipes WHERE title=?';
  db.query(sql, [title], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe deleted successfully'});
  });
});

app.patch('/recipes', (req, res) => {
  const { title, section, patch } = req.body;
  const sql = `UPDATE recipes SET ${section} = ? WHERE title = ?`;

  db.query(sql, [patch, title], (err, result) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }

      if (result.affectedRows === 0) {
          return res.status(404).json({ message: 'Recipe not found' });
      }

      res.status(200).json({ message: 'Recipe updated successfully' });
  });
});

app.put('/api/profile/username', (req, res) => {
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

app.get('/cuisines', (req, res) => {
  const sql = 'SELECT * FROM cuisines';
  db.query(sql, (err, results) => {
    if(err) {
      return res.status(500).json({error: err.message});
    }
    res.json(results);
  });
});

app.get('/cuisines/id/:id', (req, res) => {
  const cuisineId = req.params.id;
  const sql = 'SELECT * FROM cuisines WHERE id = ?';
  db.query(sql, [cuisineId], (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      if (results.length === 0) {
          return res.status(404).json({ error: 'Cuisine not found' });
      }
      res.json(results[0]);
  });
});

app.listen(port, () => {
    console.log(`API works on http://localhost:${port}`);
});