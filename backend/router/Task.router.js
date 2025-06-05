const express = require('express');
const router = express.Router();
const controller = require('../controller/Task.controller');

router.post('/create', controller.createTask);
router.get('/get-all', controller.getAllTasks);


module.exports = router;
