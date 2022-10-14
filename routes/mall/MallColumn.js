const express = require('express');
const mallColumnRouter = express.Router();
const MallColumnModel = require('../../models/mall/MallColumn');

mallColumnRouter.get('', (req, res, next) => {
    MallColumnModel.find({})
        .then((data) => {
            res.json(data.sort((a, b) => a.column - b.column));
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

mallColumnRouter.get('/:id', (req, res, next) => {
    MallColumnModel.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

mallColumnRouter.post('', (req, res, next) => {
    const column = req.body.column;

    MallColumnModel.findOne({
        column: column,
    })
        .then((data) => {
            if (data) {
                res.json('Column already exists');
            } else {
                return MallColumnModel.create({
                    column: req.body.column,
                    list: req.body.list,
                });
            }
        })
        .then((data) => {
            res.json('Create item successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

mallColumnRouter.put('/:id', (req, res, next) => {
    MallColumnModel.updateOne(
        {
            _id: req.params.id,
        },
        {
            column: req.body.column,
            list: req.body.list,
        }
    )
        .then((data) => {
            res.json('Update Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

mallColumnRouter.delete('/:id', (req, res, next) => {
    MallColumnModel.deleteOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json('Delete Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

module.exports = mallColumnRouter;
