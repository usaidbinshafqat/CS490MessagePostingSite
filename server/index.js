const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'MsgPstrDB',
    password: 'WebCS490MP',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/api/get', (req, res) => {
//     const sqlSelect =
//         'SELECT * FROM Users';
//     db.query(sqlSelect, (err, result)=> {
//             res.send(result);
//     });
// })

// to register
app.post('/api/register', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userName = req.body.userName
    const email = req.body.email;
    const password = req.body.password;
    const city = req.body.city;
    const country = req.body.country;
    const picturePath = req.body.picturePath;
    const dateOfReg = req.body.dateOfReg;


    const sqlInsert = "INSERT INTO User (Username, Password, Email, DateOfRegistration, FirstName, LastName, PicturePath, Country, City) VALUES (?,?,?,?,?,?,?,?,?);"
    db.query(sqlInsert, [userName, password, email, dateOfReg, firstName, lastName, picturePath, country, city], (err, result) => {
        console.log(err);
    });
});

app.post('/api/login', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userName = req.body.userName
    const email = req.body.email;
    const password = req.body.password;
    const city = req.body.city;
    const country = req.body.country;
    const picturePath = req.body.picturePath;
    const dateOfReg = req.body.dateOfReg;

    const sqlSelect = "SELECT * FROM User WHERE userName = ? AND password = ?"
    db.query(sqlSelect, [userName, password, email, dateOfReg, firstName, lastName, picturePath, country, city], (err, result) => {
        if (err) {res.send({err: err})
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Wrong username/password!"});
        }
    });
})
// app.delete('/api/delete/:Username', (req, res) => {
//     const username = req.params.Username;
//     const sqlDelete = "DELETE FROM Users WHERE Username = ?";
//     db.query(sqlDelete, username, (err, result) => {
//         if (err) console.log(err);
//     });
// })

// app.put('/api/update', (req, res) => {
//     const username = req.body.Username;
//     const name = req.body.Name;
//     const sqlUpdate = "UPDATE Users SET Username = ? WHERE Name = ?";
//     db.query(sqlUpdate, [username, name], (err, result) => {
//         if (err) console.log(err);
//     });
// })

app.listen(3000, () => {
    console.log("running on port 3000");
});
