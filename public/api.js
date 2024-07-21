import express from 'express';
import db from '../db.js';
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

app.get('/recipes/:id', (req, res) => {
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

app.listen(port, () => {
    console.log(`API works on http://localhost:${port}`);
});