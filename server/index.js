const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const mysql = require('mysql2');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// so that we can create a different token that is related to the user id
// whenever a user logs in.
// we will use this token to make api requests
const jwt = require('jsonwebtoken')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'MsgPstrDB',
    password: 'WebCS490MP',
});

app.use(express.json());
app.use(
    cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    key: "userId",
    secret: "register",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60*60*24,
    }
}))

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

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]

    if (!token) {
        res.send('No token found')
    } else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if (err) {
                res.json({auth: false, message: "Authentication failed"})
            } else {
                req.userId = decoded.id;
                next();
            }
        })
    }
}

app.use('/isUserAuth',verifyJWT, (req, res) => {
    res.send('Authentication successful!')
})

app.get('/api/login', (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false});
    }
})

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
    db.query(sqlSelect, userName, (err, result) => {
        if (err) {
            res.send({ err: err })
        }

        if (result.length > 0) {
            bcrypt.compare(password, result[0].Password, (error, response) => {
                if (response) {
                    // console.log(req.session.user);
                    const id = result[0].UID
                    // create a .env file to store this secret
                    const token = jwt.sign({id}, "jwtSecret", {
                        expiresIn: 300,
                    })
                    req.session.user = result;

                    //find a way to block passing of password to the frontend
                    res.json({auth: true, token: token, result: result})

                } else {
                    res.json({auth: false, message: "Wrong username/password!"})
                    // console.log({message: "Wrong username/password!"})
                }
            })
        } else {
                    res.json({auth: false, message: "User doesn't exist"})
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
