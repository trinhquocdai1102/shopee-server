const express = require('express');
const userRouter = express.Router();
const UserModel = require('../models/User');

userRouter.post('/register', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    UserModel.findOne({
        username: username,
    })
        .then((data) => {
            if (data) {
                res.json('User already exists');
            } else {
                return UserModel.create({
                    username: username,
                    password: password,
                });
            }
        })
        .then((data) => {
            res.json('Create user successfully');
        })
        .catch((err) => {
            res.status(500).json('Create user failed');
        });
});

userRouter.post('/login', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    UserModel.findOne({
        username: username,
        password: password,
    })
        .then((data) => {
            if (data) {
                res.json('Login successfully');
            } else {
                res.status(400).json('Username or password is incorrect');
            }
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

module.exports = userRouter;
