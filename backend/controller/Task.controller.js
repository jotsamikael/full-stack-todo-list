const {Task} = require('../model')
const ENV = require('../config')
const createError = require('../middleware/error')
const pagination = require("../utils/paginate");


exports.createTask = async (req, res, next) => {

try {
      const task = await Task.create({         
            title:req.body.title,
            description:req.body.description,
        });

        res.status(201).json({ message: 'Task created successfully', data: task });
    
} catch (error) {
next(createError(500, "Error occurred during Task creation", error.message));

}
}

exports.getAllTasks = async (req, res, next) => {
   try {
    const { limit, offset } = pagination.paginate(req);

    const tasks = await Task.findAndCountAll({
      where: { is_archived: false },
      limit,
      offset,
    });

    res.status(200).json(tasks);
  } catch (error) {
    next(createError(500, 'Error fetching tasks', error.message));
  }
}


