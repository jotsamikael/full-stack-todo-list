const Joi = require('joi');

const CreateTaskSchema = Joi.object({
  title: Joi.string().max(50).required(),
  description: Joi.string().max(500).required(),

});

module.exports = { CreateTaskSchema };

