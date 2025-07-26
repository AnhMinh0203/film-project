const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('Sai tài khoản hoặc mật khẩu');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Sai tài khoản hoặc mật khẩu');
  }

  const token = jwt.sign(
    { userId: user._id, username: user.username },
    process.env.JWT_SECRET || 'secret',
    { expiresIn: '1h' }
  );

  return { token };
};

const register = async ({ username, password, email, dob, gender }) => {
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    throw new Error('Tên đăng nhập hoặc email đã tồn tại');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    password: hashedPassword,
    email,
    dob,
    gender,
  });

  await newUser.save();
  return { userId: newUser._id };
};

module.exports = {
  login,
  register  
};