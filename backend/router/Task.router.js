const express = require('express');
const router = express.Router();
const controller = require('../controller/Task.controller');
const {CreateTaskSchema} = require('../validator/Task.validator')
const validate = require('../middleware/validator');


router.post('/create',validate(CreateTaskSchema), controller.createTask);
router.get('/get-all', controller.getAllTasks);
router.put('/update/:id',validate(CreateTaskSchema), controller.updateTask);
router.delete('/delete/:id', controller.deleteTask);



module.exports = router;
