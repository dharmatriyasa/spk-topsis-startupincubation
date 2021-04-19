const express = require('express');
const router = express.Router();

const DSSController = require('../controllers/dss-app');

router.get('/dss-app', DSSController.getDSSApp);

module.exports = router;