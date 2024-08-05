import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'recipes_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Connection Failed');
        return;
    }
    console.log('Succesfully Connected');
});

export default connection;
