const express = require('express');
const router = express.Router();

const DSSController = require('../controllers/dss-app');

router.get('/dss-app', DSSController.getDSSApp);
router.get('/dss-app/view-criteria', DSSController.getViewCriteria);
router.get('/dss-app/view-alternatives', DSSController.getViewAlternatives);
router.get('/dss-app/input-alternatives', DSSController.getInputAlternatives);
router.get('/dss-app/output', DSSController.getOutput);

router.post('/dss-app', DSSController.postInputCriteria);
router.post('/dss-app/input-alternatives', DSSController.postInputAlternatives);
router.post('/dss-app/view-alternatives', DSSController.postGenerateInput);



module.exports = router;