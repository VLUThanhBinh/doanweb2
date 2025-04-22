const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Giả lập database người dùng
const users = [
  { id: 1, username: 'admin', password: '$2b$10$rW1Qv1Cj8kK0x1j2F6F9Oe1q6G9Y7w9QvK7v0w8w7QvK7v0w8w7QvK' } // password: 123456
];

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.json({ success: false, message: 'Sai tên đăng nhập hoặc mật khẩu' });
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.json({ success: false, message: 'Sai tên đăng nhập hoặc mật khẩu' });
  }
  // Nếu thành công, có thể trả về token hoặc thông tin người dùng
  res.json({ success: true, message: 'Đăng nhập thành công', user: { id: user.id, username: user.username } });
});

module.exports = router;
