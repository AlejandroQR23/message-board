const express = require('express');
const { messages } = require('../data/messages');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('form');
});

router.post('/', (req, res) => {
  const { text, user } = req.body;
  messages.unshift({ text, user, added: new Date().toDateString() });
  res.redirect('/');
});

module.exports = router;
