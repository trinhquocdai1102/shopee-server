const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopee', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const MallItemSchema = new Schema({
    title: String,
    url: String,
    thumbnail: String,
    status: String,
});

const MallItemModel = mongoose.model('mall-item', MallItemSchema);

module.exports = MallItemModel;
