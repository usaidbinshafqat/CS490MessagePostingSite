const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const bcrypt = require('bcrypt')
const saltRounds = 10
const mysql = require('mysql2')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'MsgPstrDB',
  password: 'WebCS490MP'
})

app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:3001'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })
)
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
  session({
    key: 'userId',
    secret: 'register',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24
    }
  })
)

// app.get('/api/get', (req, res) => {
//     const sqlSelect =
//         'SELECT * FROM Users';
//     db.query(sqlSelect, (err, result)=> {
//             res.send(result);
//     });
// })

// to register
app.post('/api/register', (req, res) => {
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const userName = req.body.userName
  const email = req.body.email
  const password = req.body.password
  const city = req.body.city
  const country = req.body.country
  const picturePath = req.body.picturePath
  const dateOfReg = req.body.dateOfReg

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err)
    }
    const sqlInsert =
      'INSERT INTO User (Username, Password, Email, DateOfRegistration, FirstName, LastName, PicturePath, Country, City) VALUES (?,?,?,?,?,?,?,?,?);'
    db.query(
      sqlInsert,
      [
        userName,
        hash,
        email,
        dateOfReg,
        firstName,
        lastName,
        picturePath,
        country,
        city
      ],
      (err, result) => {
        console.log(err)
      }
    )
  })
})

app.get('/api/login', (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user })
  } else {
    res.send({ loggedIn: false })
  }
})

app.post('/api/login', (req, res) => {
  // const firstName = req.body.firstName;
  // const lastName = req.body.lastName;
  const userName = req.body.userName
  // const email = req.body.email;
  const password = req.body.password
  // const city = req.body.city;
  // const country = req.body.country;
  // const picturePath = req.body.picturePath;
  // const dateOfReg = req.body.dateOfReg;

  const sqlSelect = 'SELECT * FROM User WHERE userName = ?'
  db.query(sqlSelect, userName, (err, result) => {
    if (err) {
      res.send({ err: err })
    }

    if (result.length > 0) {
      bcrypt.compare(password, result[0].Password, (error, response) => {
        if (response) {
          req.session.user = result
          console.log(req.session.user)
          res.send(result)
        } else {
          res.send({ message: 'Wrong username/password!' })
          console.log({ message: 'Wrong username/password!' })
        }
      })
    } else {
      res.send({ message: "User doesn't exist" })
    }
  })
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
  const newPost = req.body.newPost
  const userID = req.body.userID
  const messageType = req.body.messageType
  const path = req.body.path
  const postDate = req.body.postDate
  const likes = req.body.likes
  const privacy = req.body.privacy

  const sqlInsert =
    'INSERT INTO Message (UID, TypeOfMessage, Message, Path, Date, Likes, Privacy) VALUES (?,?,?,?,?,?,?);'
  db.query(
    sqlInsert,
    [userID, messageType, newPost, path, postDate, likes, privacy],
    (err, result) => {
      console.log(err)
    }
  )
})
app.listen(3000, () => {
  console.log('running on port 3000')
})

app.get('/message', (req, res) => {
  const sqlSelect = 'SELECT * FROM Message ORDER BY Date DESC, MessageID DESC'
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})
