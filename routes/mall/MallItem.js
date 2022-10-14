const express = require('express');
const mallItemRouter = express.Router();
const MallItemModel = require('../../models/mall/MallItem');

mallItemRouter.get('', (req, res, next) => {
    MallItemModel.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

mallItemRouter.get('/:id', (req, res, next) => {
    MallItemModel.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

mallItemRouter.post('', (req, res, next) => {
    MallItemModel.create({
        thumbnail: req.body.thumbnail,
        title: req.body.title,
        url: req.body.url,
        status: req.body.status,
    })
        .then((data) => {
            res.json('Create Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

mallItemRouter.put('/:id', (req, res, next) => {
    MallItemModel.updateOne(
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

mallItemRouter.delete('/:id', (req, res, next) => {
    MallItemModel.deleteOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json('Delete Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

module.exports = mallItemRouter;
