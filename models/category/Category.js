const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopee', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: String,
    url: String,
    thumbnail: String,
});

const CategoryModel = mongoose.model('category', CategorySchema);

module.exports = CategoryModel;
