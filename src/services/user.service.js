const User = require('../models/user');

const getAllUsers = async () => {
  try {
    return User.find({});
  } catch (error) {
    throw error;
  }
}

const updateUser = async (userId, userData) => {
  try {
    const user = await User.findByIdAndUpdate(userId, userData, { new: true }); 
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw error;
  }
}

const getUserById = async (userId) =>{
  try{
    const user = await User.findById(userId);
    if (!user) {
      throw {
        statusCode : 404,
        message: 'User not found'
      }
    }
    return user;
  }
  catch (error) {
    throw error;
  }
}

const deleteUserById = async (userId) => {
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllUsers,
  updateUser,
  getUserById,
  deleteUserById
};