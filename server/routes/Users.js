const express = require('express');
const router = express.Router();

const { User } = require('../models')
const bcrypt = require('bcrypt')

const { sign } = require('jsonwebtoken')
require("dotenv").config();


router.get("/", async (req, res) => {
    const listOfUsers = await User.findAll();
    res.json(listOfUsers);
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
        City
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
            City: City
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