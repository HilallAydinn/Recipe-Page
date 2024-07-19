import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
const encoder = bodyParser.urlencoded({ extended: true });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '001234',
    database: 'admin_db'
});

connection.connect(function(error){
    if(error){
        throw error;
    } else {
        console.log('MySQL database connected successfully.');
    }
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post("/login", encoder, function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    connection.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], function(error, results, fields){
        if(error){
            console.log(error);
            res.status(500).send("Internal Server Error");
            return;
        }
        if(results.length > 0){
            res.redirect("/welcome.html");
        } else {
            res.sendFile(path.join(__dirname, 'public', 'login.html'));
        }
    });
});

app.get("/welcome.html", function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
});

const PORT = process.env.PORT || 5501;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
