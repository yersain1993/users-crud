const express = require('express');
const userRouter = require('./user.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/user', userRouter);

module.exports = router;