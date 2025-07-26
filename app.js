require('dotenv').config();
require('./src/services/mongoose');
const config = require('./src/config/config');

const express = require('express');
const app = express();

const authRoute = require('./src/routes/auth.route');
const userRoute = require('./src/routes/user.route');

// Swagger UI
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./src/docs/swagger-output.json');

app.use(express.json());

// Mount route
app.use('/auth', authRoute);
app.use('/user', userRoute);

// Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Default route
app.get('/', (req, res) => {
  res.send('Hello Node.js + Express');
});

// Start server
app.listen(config.port,() => {
  console.log(`🚀 Server is running at http://localhost:${config.port}/api-docs`);
});