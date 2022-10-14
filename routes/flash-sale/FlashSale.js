const express = require('express');
const flashSaleRouter = express.Router();
const FlashSaleModel = require('../../models/flash-sale/FlashSale');

flashSaleRouter.get('', (req, res, next) => {
    FlashSaleModel.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

flashSaleRouter.get('/:id', (req, res, next) => {
    FlashSaleModel.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

flashSaleRouter.post('', (req, res, next) => {
    FlashSaleModel.create({
        title: req.body.title,
        thumbnail: req.body.thumbnail,
        salePercent: req.body.salePercent,
        bannerSale: req.body.bannerSale,
        amountSale: req.body.amountSale,
        price: req.body.price,
        url: req.body.url,
    })
        .then((data) => {
            res.json('Create Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

flashSaleRouter.put('/:id', (req, res, next) => {
    FlashSaleModel.updateOne(
        {
            _id: req.params.id,
        },
        {
            title: req.body.title,
            thumbnail: req.body.thumbnail,
            salePercent: req.body.salePercent,
            bannerSale: req.body.bannerSale,
            amountSale: req.body.amountSale,
            price: req.body.price,
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

flashSaleRouter.delete('/:id', (req, res, next) => {
    FlashSaleModel.deleteOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json('Delete Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

module.exports = flashSaleRouter;
