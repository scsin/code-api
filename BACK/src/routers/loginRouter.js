const express = require('express');
const router = express.Router();
const { createUser, getLoginToken } = require('../controllers/loginController');

router.post('/user', createUser);
router.post('/login', getLoginToken);

module.exports = router;
