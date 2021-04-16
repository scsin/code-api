const express = require('express');
const router = express.Router();
const middleware = require('../controllers/middleware');
const { getCards, insertCards, updateCards, deleteCards } = require('../controllers/cardController');

router.get('/cards', middleware, getCards);
router.post('/cards', middleware, insertCards);
router.put('/cards/:id', middleware, updateCards);
router.delete('/cards/:id', middleware, deleteCards);

module.exports = router;
