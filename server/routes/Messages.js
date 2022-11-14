const express = require('express')
const router = express.Router()

const { Message } = require('../models')
const { verifyToken } = require('../middlewares/AuthMiddleware')

router.get('/', async (req, res) => {
  const listOfMessages = await Message.findAll({
    order: [['createdAt', 'DESC']]
  })
  res.json(listOfMessages)
})

router.get('/byId/:UID', async (req, res) => {
  const UID = req.params.UID

  const userMessages = await Message.findAll({
    where: { UID: UID }
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

router.put('/likes/:id', verifyToken, async (req, res) => {
  const messageID = req.params.MessageID
  await Message.increment('Likes', { by: 1, where: { MessageID: messageID } })
  res.json({ success: true })
})

module.exports = router
