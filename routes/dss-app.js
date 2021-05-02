const express = require('express');
const router = express.Router();

const DSSController = require('../controllers/dss-app');

router.get('/dss-app', DSSController.getDSSApp);
router.get('/dss-app/view-alternatives', DSSController.getViewAlternatives);
router.get('/dss-app/input-alternatives', DSSController.getInputAlternatives);
router.get('/dss-app/output', DSSController.getOutput);
router.post('/dss-app/input-alternatives', DSSController.postInputAlternatives);



module.exports = router;