const express = require('express');
const router = express.Router();

const { User } = require('../models')
const { verifyToken } = require('../middlewares/AuthMiddleware')
const bcrypt = require('bcrypt')

const { sign } = require('jsonwebtoken')
require("dotenv").config();


router.get("/", async (req, res) => {
    const listOfUsers = await User.findAll();
    res.json(listOfUsers);
});

router.get("/byId/:UID", async (req, res) => {
    const UID = req.params.UID;

    const userInfo = await User.findAll({
        where: { UID: UID }
    });
    res.json(userInfo);
})

router.get("/byage/:Age", async (req, res) => {
    const Age = req.params.Age;

    const userInfo = await User.findAll({
        where: { Age: Age }
    });
    res.json(userInfo);
})

router.get("/byusername/:Username", async (req, res) => {
    const Username = req.params.Username;

    const userInfo = await User.findAll({
        where: { Username: Username }
    });
    res.json(userInfo);
})

router.get("/isAuth", verifyToken, async (req, res) => {
    const user = req.body
    const Username = req.user.Username;
    user.Username = Username;
    res.json(user);
});

router.post("/", async (req, res) => {
    const {
        Username,
        Password,
        Email,
        DateOfRegistration,
        FirstName,
        LastName,
        PicturePath,
        Country,
        City,
        Age
    } = req.body;
    bcrypt.hash(Password, 10).then((hash) => {
        User.create({
            Username: Username,
            Password: hash,
            Email: Email,
            DateOfRegistration: DateOfRegistration,
            FirstName: FirstName,
            LastName: LastName,
            PicturePath: PicturePath,
            Country: Country,
            City: City,
            Age: Age
        });
        res.json("Success");
    });
});

router.post('/login', async (req, res) => {
    const { Username, Password } = req.body;

    const user = await User.findOne({
        where: {
            Username: Username
        }
    })
    if (!user) {
        res.json({ message: "User doesn't exist" });
    } else {

        bcrypt.compare(Password, user?.Password).then((match) => {
            if (!match) {
                res.json({ message: "Wrong Username/Password!" })
            } else {
                const accessToken = sign({ Username: user.Username, UID: user.UID }, `${process.env.ACCESS_TOKEN_SECRET}`);
                res.json(accessToken);
            }
        });
    }
});

module.exports = router;