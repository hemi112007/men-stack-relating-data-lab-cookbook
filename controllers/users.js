const express = require('express');
const User = require('../models/user');
const router = express.Router();


router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render('users/show', { user });
});

module.exports = router;
