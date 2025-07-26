const express = require('express');
const { authController } = require('../controllers');
const router = express.Router();

router.post(
    '/login',
    /* 
        #swagger.tags = ['Authen']
        #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: { $ref: '#/definitions/LoginDto' }
        }
    */
    authController.login);

router.post(
    '/register',
    /* 
        #swagger.tags = ['Authen']
        #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: { $ref: '#/definitions/RegisterDto' }
        }
    */
    authController.register);

module.exports = router;



