const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopee', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const AdsSchema = new Schema({
    src: String,
    url: String,
});

const AdsModel = mongoose.model('ad', AdsSchema);

module.exports = AdsModel;
