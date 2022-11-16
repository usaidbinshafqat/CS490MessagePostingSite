const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/AuthMiddleware')


const { UserFollowing } = require('../models')

router.get("/", async (req, res) => {
    const listOfUserfollowing = await UserFollowing.findAll();
    res.json(listOfUserfollowing);
});

router.post("/",verifyToken, async (req, res) => {
    const userfollowing = req.body
    const UID = req.user.UID
    userfollowing.UID = UID
    await UserFollowing.create(userfollowing);
    res.json(userfollowing)
})

module.exports = router;