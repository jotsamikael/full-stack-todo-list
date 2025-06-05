const {Task} = require('../model')
const ENV = require('../config')
const createError = require('../middleware/error')
const pagination = require("../utils/paginate");


/**
 * @swagger
 * /task/create:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task created
 */
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

/**
 * @swagger
 * /task/get-all:
 *   get:
 *     summary: Get all tasks (paginated)
 *     tags: [Task]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                 rows:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Task'
 */
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


/**
 * @swagger
 * /task/update/{id}:
 *   put:
 *     summary: Update a task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Task updated
 */
exports.updateTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await Task.findByPk(id);

    if (!task) {
      return next(createError(404, 'Task not found'));
    }

    const updatedData = {
      title: req.body.title ?? task.title,
      description: req.body.description ?? task.description,
    };
    await task.update(updatedData);

    res.status(200).json({
      message: 'Task updated successfully',
      data: task,
    });
  } catch (error) {
    next(createError(500, 'Error updating task', error.message));
  }
};


/**
 * @swagger
 * /task/delete/{id}:
 *   delete:
 *     summary: Deleted a task (soft delete)
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Task deleted
 */
exports.deleteTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Task.update({ is_archived: true }, { //soft delete
      where: { idTask: id },
    });

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    next(createError(500, 'Error deleting task', error.message));
  }
};