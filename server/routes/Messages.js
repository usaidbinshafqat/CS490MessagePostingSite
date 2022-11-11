const express = require('express');
const router = express.Router();

const { Message } = require('../models')
const { verifyToken } = require('../middlewares/AuthMiddleware')

router.get("/", async (req, res) => {
    const listOfMessages = await Message.findAll();
    res.json(listOfMessages);
});

router.get("/byId/:UID", async (req, res) => {
    const UID = req.params.UID;

    const userMessages = await Message.findAll({
        where: { UID: UID }
    });
    res.json(userMessages);
});

router.post("/", verifyToken, async (req, res) => {
    const message = req.body
    await Message.create(message);
    res.json(message)
})

module.exports = router;