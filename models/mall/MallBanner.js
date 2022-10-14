const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopee', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const MallBannerSchema = new Schema({
    title: String,
    thumbnail: String,
    url: String,
});

const MallBannerModel = mongoose.model('mall-banner', MallBannerSchema);

module.exports = MallBannerModel;
