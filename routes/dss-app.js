const express = require('express');
const router = express.Router();

const DSSController = require('../controllers/dss-app');

router.get('/dss-app', DSSController.getDSSApp);
router.get('/dss-app/view-alternatives', DSSController.getViewAlternatives);

module.exports = router;