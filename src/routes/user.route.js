const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.get(
    '/getAllUser',
    /* #swagger.tags = ['User']*/
    userController.getAllUsers);

router.put('/update/:id',
    /* 
        #swagger.tags = ['User']
        #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: { $ref: '#/definitions/UpdateUserDto' }
        }
    */
    userController.updateUser);

router.get('/getUserById/:id',
    /* #swagger.tags = ['User']*/
    userController.getUserById);

router.delete('/deleteUserById/:id', 
    /* #swagger.tags = ['User']*/
    userController.deleteUserById);


module.exports = router;

