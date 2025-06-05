const express = require('express');
const router = express.Router();
const controller = require('../controller/Task.controller');

router.post('/create', controller.createTask);

module.exports = router;
