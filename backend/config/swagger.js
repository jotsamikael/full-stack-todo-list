const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const schemas = require('./swagger.schemas'); 

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'OpenAPI Specification - Fullstack ToDo List API',
      version: '1.0.0',
      description: 'OpenAPI documentation for a simple ToDo List API project',
      termsOfService: 'https://dodibo.com/terms',
      contact: {
        name: 'jotsamikael',
        email: 'jotsamikael@gmail.com',
        url: 'https://dodibo.com/'
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      }
    },
    servers: [
      {
        url: 'http://localhost:8885/api',
        description: 'Local ENV.'
      },
      {
        url: 'https://production.com/api',
        description: 'Production ENV.'
      }
    ],
    components: {
      ...schemas.components
    }
  },
  apis: ['./routes/*.js', './controller/*.js'], // Swagger annotations source
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // JSON spec output (like Swagger JSON)
  app.get('/api-docs-json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};

module.exports = setupSwagger;
