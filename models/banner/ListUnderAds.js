const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopee', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const ListUnderAdsSchema = new Schema({
    thumbnail: String,
    title: String,
    url: String,
});

const ListUnderAdsModel = mongoose.model('list-under-ad', ListUnderAdsSchema);

module.exports = ListUnderAdsModel;
