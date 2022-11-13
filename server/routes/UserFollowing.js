const express = require('express');
const router = express.Router();

const { UserFollowing } = require('../models')

router.get("/", async (req, res) => {
    const listOfUserfollowing = await UserFollowing.findAll();
    res.json(listOfUserfollowing);
});

router.post("/", async (req, res) => {
    const userfollowing = req.body
    await UserFollowing.create(userfollowing);
    res.json(userfollowing)
})

module.exports = router;