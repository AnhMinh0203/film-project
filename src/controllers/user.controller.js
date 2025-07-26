const { userService } = require('../services');  

const getAllUsers = async (req,res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Lấy danh sách người dùng thất bại', error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = await userService.updateUser(userId, req.body);
    if (!updatedUser) {
      return res.status(404).json({ message: 'Người dùng không tìm thấy' });
    }
    res.status(200).json({ message: 'Cập nhật thành công', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Cập nhật người dùng thất bại', error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    res.status(200).json(user);
  } catch (error) {
    if (error.statusCode === 404) {
      return res.status(404).json({ message: error.message });
    }
    console.error(error);
    res.status(500).json({ message: 'Lấy thông tin người dùng thất bại', error: error.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Người dùng không tìm thấy' });
    }
    await userService.deleteUserById(userId);
    res.status(200).json({ message: 'Xóa người dùng thành công' });
  } catch (error) {
    if (error.statusCode === 404) {
      return res.status(404).json({ message: error.message });
    }
    console.error(error);
    res.status(500).json({ message: 'Xóa người dùng thất bại', error: error.message });
  }
};

module.exports = {
    getAllUsers,
    updateUser,
    getUserById,
    deleteUserById
};