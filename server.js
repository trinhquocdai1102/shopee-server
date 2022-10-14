const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/User');
const adsRouter = require('./routes/banner/Ads');
const listUnderAdsRouter = require('./routes/banner/ListUnderAds');
const categoryRouter = require('./routes/category/Category');
const categoryColumnRouter = require('./routes/category/CategoryColumn');
const flashSaleRouter = require('./routes/flash-sale/FlashSale');
const mallBannerRouter = require('./routes/mall/MallBanner');
const mallColumnRouter = require('./routes/mall/MallColumn');
const mallItemRouter = require('./routes/mall/MallItem');
const topSearchRouter = require('./routes/top-search/TopSearch');
const todaySuggestRouter = require('./routes/today-suggest/TodaySuggest');
const APICommon = '/api/v1';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(`${APICommon}/ads`, adsRouter);
app.use(`${APICommon}/under-top-ads`, listUnderAdsRouter);
app.use(`${APICommon}/categories`, categoryRouter);
app.use(`${APICommon}/flash-sale`, flashSaleRouter);
app.use(`${APICommon}/category-column`, categoryColumnRouter);
app.use(`${APICommon}/mall-banner`, mallBannerRouter);
app.use(`${APICommon}/mall-column`, mallColumnRouter);
app.use(`${APICommon}/mall-item`, mallItemRouter);
app.use(`${APICommon}/top-search`, topSearchRouter);
app.use(`${APICommon}/today-suggest`, todaySuggestRouter);
app.use('/', userRouter);

// Port
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
