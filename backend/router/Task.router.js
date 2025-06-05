const express = require('express');
const router = express.Router();
const controller = require('../controller/Task.controller');

router.post('/create', controller.createTask);
router.get('/get-all', controller.getAllTasks);
router.put('/update/:id', controller.updateTask);



module.exports = router;
