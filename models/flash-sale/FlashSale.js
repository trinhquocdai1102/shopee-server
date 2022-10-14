const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopee', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const FlashSaleSchema = new Schema({
    title: String,
    thumbnail: String,
    salePercent: Number,
    bannerSale: String,
    amountSale: Number,
    price: Number,
    url: String,
});

const FlashSaleModel = mongoose.model('flash-sale', FlashSaleSchema);

module.exports = FlashSaleModel;
