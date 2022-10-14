const express = require('express');
const topSearchRouter = express.Router();
const TopSearchModel = require('../../models/top-search/TopSearch');

topSearchRouter.get('', (req, res, next) => {
    TopSearchModel.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

topSearchRouter.get('/:id', (req, res, next) => {
    TopSearchModel.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

topSearchRouter.post('', (req, res, next) => {
    TopSearchModel.create({
        thumbnail: req.body.thumbnail,
        title: req.body.title,
        soldAmount: req.body.soldAmount,
        url: req.body.url,
    })
        .then((data) => {
            res.json('Create Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

topSearchRouter.put('/:id', (req, res, next) => {
    TopSearchModel.updateOne(
        {
            _id: req.params.id,
        },
        {
            thumbnail: req.body.thumbnail,
            title: req.body.title,
            soldAmount: req.body.soldAmount,
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

topSearchRouter.delete('/:id', (req, res, next) => {
    TopSearchModel.deleteOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json('Delete Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

module.exports = topSearchRouter;
