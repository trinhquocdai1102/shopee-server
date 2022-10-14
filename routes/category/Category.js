const express = require('express');
const categoryRouter = express.Router();
const CategoryModel = require('../../models/category/Category');

categoryRouter.get('', (req, res, next) => {
    CategoryModel.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

categoryRouter.get('/:id', (req, res, next) => {
    CategoryModel.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

categoryRouter.post('', (req, res, next) => {
    CategoryModel.create({
        thumbnail: req.body.thumbnail,
        title: req.body.title,
        url: req.body.url,
    })
        .then((data) => {
            res.json('Create Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

categoryRouter.put('/:id', (req, res, next) => {
    CategoryModel.updateOne(
        {
            _id: req.params.id,
        },
        {
            thumbnail: req.body.thumbnail,
            title: req.body.title,
            url: req.body.url,
        }
    )
        .then((data) => {
            res.json('Update Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

categoryRouter.delete('/:id', (req, res, next) => {
    CategoryModel.deleteOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json('Delete Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

module.exports = categoryRouter;
