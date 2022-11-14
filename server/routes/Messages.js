const express = require('express')
const router = express.Router()

const { Message } = require('../models')
const { verifyToken } = require('../middlewares/AuthMiddleware')

router.get('/', async (req, res) => {
  const listOfMessages = await Message.findAll({
    order: [['Date', 'DESC']]
  })
  res.json(listOfMessages)
})

router.get('/bylikes', async (req, res) => {
    const listOfMessages = await Message.findAll({
      order: [['Likes', 'DESC']]
    })
    res.json(listOfMessages)
  })


router.get('/byId/:UID', async (req, res) => {
  const UID = req.params.UID

  const userMessages = await Message.findAll({
    where: { UID: UID },
    order: [['Date', 'DESC']]
  })
  res.json(userMessages)
})

router.post('/', verifyToken, async (req, res) => {
  const message = req.body
  const UID = req.user.UID
  message.UID = UID
  await Message.create(message)
  res.json(message)
})

router.get("/bypost/:Post", async (req, res) => {
    const Post = req.params.Post;
    const listMessages = await Message.findOne({ where: { Message : Post } });
    res.json(listMessages);
});

router.get("/bypost/:Post", async (req, res) => {
    const Post = req.params.Post;
    const listMessages = await Message.findOne({ where: { Message : Post } });
    res.json(listMessages);
});

router.post('/', verifyToken, async (req, res) => {
  const message = req.body
  const UID = req.user.UID
  message.UID = UID
  await Message.create(message)
  res.json(message)
})

router.put('/likes/:id', verifyToken, async (req, res) => {
  const messageID = req.params.MessageID
  await Message.increment('Likes', { by: 1, where: { MessageID: messageID } })
  res.json({ success: true })
})

module.exports = router
