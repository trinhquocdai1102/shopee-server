const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopee', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const TopSearchSchema = new Schema({
    title: String,
    url: String,
    thumbnail: String,
    soldAmount: Number,
});

const TopSearchModel = mongoose.model('top-search', TopSearchSchema);

module.exports = TopSearchModel;
