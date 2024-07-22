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

app.post('/recipes', (req, res) => {
  const { title, img, ingredients, instructions, category } = req.body;
  const sql = 'INSERT INTO recipes (title, img, ingredients, instructions, category) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [title, img, ingredients, instructions, category], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Recipe added successfully', id: result.insertId});
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

app.listen(port, () => {
    console.log(`API works on http://localhost:${port}`);
});