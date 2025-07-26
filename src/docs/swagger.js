const swaggerAutogen = require('swagger-autogen')();
const config = require('../config/config');

const doc = {
  info: {
    title: 'Film Swagger API Documentation',
    description: 'Description'
  },
  host: `localhost:${config.port}`,  
  tags: [
    {
      name: 'Authen',
    },
    {
      name: 'User',
    },
  ],
  definitions: require('../Dtos'), 
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc);
