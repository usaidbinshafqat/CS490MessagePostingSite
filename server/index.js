const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'MsgPstrDB',
    password: 'WebCS490MP',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err)
        }
        const sqlInsert = "INSERT INTO User (Username, Password, Email, DateOfRegistration, FirstName, LastName, PicturePath, Country, City) VALUES (?,?,?,?,?,?,?,?,?);"
        db.query(sqlInsert, [userName, hash, email, dateOfReg, firstName, lastName, picturePath, country, city], (err, result) => {
            console.log(err);
        });
    })
});

app.post('/api/login', (req, res) => {
    // const firstName = req.body.firstName;
    // const lastName = req.body.lastName;
    const userName = req.body.userName
    // const email = req.body.email;
    const password = req.body.password;
    // const city = req.body.city;
    // const country = req.body.country;
    // const picturePath = req.body.picturePath;
    // const dateOfReg = req.body.dateOfReg;

    const sqlSelect = "SELECT * FROM User WHERE userName = ?"
    db.query(sqlSelect, [userName], (err, result) => {
        if (err) {
            res.send({ err: err })
        }

        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (error, response) => {
                if (response) {
                    res.send(result)
                } else {
                    res.send({ message: "Wrong username/password!" });
                }
            })
        } else {
            res.send({ message: "User doesn't exist" });
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

// to post
app.post('/api/post', (req, res) => {
    const newPost = req.body.newPost;
    const userID = req.body.userID;
    const messageType = req.body.messageType
    const path = req.body.path;
    const postDate = req.body.postDate;
    const likes = req.body.likes;
    const privacy = req.body.privacy;


    const sqlInsert = "INSERT INTO Message (UID, TypeOfMessage, Message, Path, Date, Likes, Privacy) VALUES (?,?,?,?,?,?,?);"
    db.query(sqlInsert, [userID, messageType, newPost, path, postDate, likes, privacy], (err, result) => {
        console.log(err);
    });
});
app.listen(3000, () => {
    console.log("running on port 3000");
});
