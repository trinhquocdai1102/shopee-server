const express = require('express');
const mallBannerRouter = express.Router();
const MallBannerModel = require('../../models/mall/MallBanner');

mallBannerRouter.get('', (req, res, next) => {
    MallBannerModel.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

mallBannerRouter.get('/:id', (req, res, next) => {
    MallBannerModel.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

mallBannerRouter.post('', (req, res, next) => {
    MallBannerModel.create({
        title: req.body.title,
        thumbnail: req.body.thumbnail,
        url: req.body.url,
    })
        .then((data) => {
            res.json('Create Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

mallBannerRouter.put('/:id', (req, res, next) => {
    MallBannerModel.updateOne(
        {
            _id: req.params.id,
        },
        {
            title: req.body.title,
            thumbnail: req.body.thumbnail,
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

mallBannerRouter.delete('/:id', (req, res, next) => {
    MallBannerModel.deleteOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json('Delete Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

module.exports = mallBannerRouter;
