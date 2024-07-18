const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const encoder = bodyParser.urlencoded({ extended: true });

app.use(cors());
app.use("/assets", express.static("assets"));

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
    res.sendFile(__dirname + "/login.html");
});

app.post("/", encoder, function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    connection.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], function(error, results, fields){
        if(results.length > 0){
            res.redirect("/welcome.html");
        } else {
            res.sendFile(__dirname + "/login.html"); // Başarısız giriş durumunda login sayfasını tekrar göster
        }
    });
});

app.get("/welcome.html", function(req, res){
    res.sendFile(__dirname + "/welcome.html");
});

app.listen(4500, () => {
    console.log('Server is running on port 4500');
});


