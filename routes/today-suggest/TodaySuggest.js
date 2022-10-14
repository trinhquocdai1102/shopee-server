const express = require('express');
const todaySuggestRouter = express.Router();
const TodaySuggestModel = require('../../models/today-suggest/TodaySuggest');

todaySuggestRouter.get('', (req, res, next) => {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    if (page >= 0 || limit >= 0) {
        if (!limit) {
            limit = 10;
        }
        TodaySuggestModel.find({})
            .skip(page * limit)
            .limit(limit)
            .then((data) => {
                TodaySuggestModel.countDocuments({}).then((total) => {
                    let totalPage = Math.ceil(total / limit);
                    res.json({
                        data: data,
                        pagination: {
                            page: page,
                            limit: limit,
                            totalPage: totalPage,
                        },
                    });
                });
            })
            .catch((err) => {
                res.status(500).json('Internal Server Error');
            });
    } else {
        TodaySuggestModel.find({})
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(500).json('Internal Server Error');
            });
    }
});

todaySuggestRouter.get('/:id', (req, res, next) => {
    TodaySuggestModel.findOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

todaySuggestRouter.post('', (req, res, next) => {
    TodaySuggestModel.create({
        title: req.body.title,
        thumbnail: req.body.thumbnail,
        favorite: req.body.favorite,
        salePercent: req.body.salePercent,
        detail: req.body.detail,
        bannerSale: req.body.bannerSale,
        price: req.body.price,
        soldAmount: req.body.soldAmount,
    })
        .then((data) => {
            res.json('Create Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

todaySuggestRouter.put('/:id', (req, res, next) => {
    TodaySuggestModel.updateOne(
        {
            _id: req.params.id,
        },
        {
            title: req.body.title,
            thumbnail: req.body.thumbnail,
            favorite: req.body.favorite,
            salePercent: req.body.salePercent,
            detail: req.body.detail,
            bannerSale: req.body.bannerSale,
            price: req.body.price,
            soldAmount: req.body.soldAmount,
        }
    )
        .then((data) => {
            res.json('Update Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

todaySuggestRouter.delete('/:id', (req, res, next) => {
    TodaySuggestModel.deleteOne({
        _id: req.params.id,
    })
        .then((data) => {
            res.json('Delete Item Successfully');
        })
        .catch((err) => {
            res.status(500).json('Internal Server Error');
        });
});

module.exports = todaySuggestRouter;
