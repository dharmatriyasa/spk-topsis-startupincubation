const express = require('express');
const router = express.Router();

const UserControllers = require('../controllers/user');

router.get('/', UserControllers.getIndex);

module.exports = router;