const express = require('express');
const router = express.Router();

const { HashTags, MessageHashTags } = require('../models')

router.get("/", async (req, res) => {
    const listHashTags = await HashTags.findAll();
    res.json(listHashTags);
});

router.post("/", async (req, res) => {
    const HashTag = req.body
    await HashTags.create(HashTag);
    res.json(HashTag)
})

module.exports = router;


sqlSelect = "MessageHashTags.MessageID FROM MessageHashTags INNER JOIN HashTags ON MessageHashTags.HashTagID = "