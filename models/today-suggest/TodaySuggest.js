const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopee', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const TodaySuggestSchema = new Schema({
    title: String,
    thumbnail: String,
    favorite: Boolean,
    salePercent: Number,
    detail: [],
    bannerSale: String,
    price: Number,
    soldAmount: Number,
});

const TodaySuggestModel = mongoose.model('today-suggest', TodaySuggestSchema);

module.exports = TodaySuggestModel;
