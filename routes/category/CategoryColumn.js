const express = require('express');
const categoryColumnRouter = express.Router();
const CategoryColumnModel = require('../../models/category/CategoryColumn');

categoryColumnRouter.get('', (req, res, next) => {
    CategoryColumnModel.find({})
        .then((data) => {
            res.json(data.sort((a, b) => a.column - b.column));
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

categoryColumnRouter.get('/:id', (req, res, next) => {
    CategoryColumnModel.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

categoryColumnRouter.post('', (req, res, next) => {
    const column = req.body.column;

    CategoryColumnModel.findOne({
        column: column,
    })
        .then((data) => {
            if (data) {
                res.json('Column already exists');
            } else {
                return CategoryColumnModel.create({
                    column: req.body.column,
                    categories: req.body.categories,
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

categoryColumnRouter.put('/:id', (req, res, next) => {
    CategoryColumnModel.updateOne(
        {
            _id: req.params.id,
        },
        {
            column: req.body.column,
            categories: req.body.categories,
        }
    )
        .then((data) => {
            res.json('Update Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

categoryColumnRouter.delete('/:id', (req, res, next) => {
    CategoryColumnModel.deleteOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json('Delete Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

module.exports = categoryColumnRouter;
