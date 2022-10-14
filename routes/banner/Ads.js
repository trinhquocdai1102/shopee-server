const express = require('express');
const adsRouter = express.Router();
const AdsModel = require('../../models/banner/Ads');

adsRouter.get('', (req, res, next) => {
    AdsModel.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

adsRouter.get('/:id', (req, res, next) => {
    AdsModel.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

adsRouter.post('', (req, res, next) => {
    AdsModel.create({
        src: req.body.src,
        url: req.body.url,
    })
        .then((data) => {
            res.json('Create Ads Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

adsRouter.put('/:id', (req, res, next) => {
    AdsModel.updateOne(
        {
            _id: req.params.id,
        },
        {
            src: req.body.src,
            url: req.body.url,
        }
    )
        .then((data) => {
            res.json('Update Ads Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

adsRouter.delete('/:id', (req, res, next) => {
    AdsModel.deleteOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json('Delete Ads Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

module.exports = adsRouter;
