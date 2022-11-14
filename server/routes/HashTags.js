const express = require('express');
const router = express.Router();

const { HashTags } = require('../models')

router.get("/", async (req, res) => {
    const listHashTags = await HashTags.findAll();
    res.json(listHashTags);
});

router.get("/byhashtag/:HashTag", async (req, res) => {
    const HashTag = req.params.HashTag;
    const listHashTags = await HashTags.findOne({ where: { HashTag: HashTag } });
    res.json(listHashTags);
});

router.post("/", async (req, res) => {
    const HashTag = req.body
    const [hashtag, created] = await HashTags.findOrCreate({
        where: { HashTag: JSON.stringify(HashTag).slice(12,-2) },
      });
    res.json(hashtag.HashTag)
})

module.exports = router;