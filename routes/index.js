const express = require('express');
const router = express.Router();

const { messages } = require('../data/messages');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { messages });
});

module.exports = router;
