const express = require('express');
const listUnderAdsRouter = express.Router();
const ListUnderAdsModel = require('../../models/banner/ListUnderAds');

listUnderAdsRouter.get('', (req, res, next) => {
    ListUnderAdsModel.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

listUnderAdsRouter.get('/:id', (req, res, next) => {
    ListUnderAdsModel.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

listUnderAdsRouter.post('', (req, res, next) => {
    ListUnderAdsModel.create({
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

listUnderAdsRouter.put('/:id', (req, res, next) => {
    ListUnderAdsModel.updateOne(
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

listUnderAdsRouter.delete('/:id', (req, res, next) => {
    ListUnderAdsModel.deleteOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json('Delete Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

module.exports = listUnderAdsRouter;
