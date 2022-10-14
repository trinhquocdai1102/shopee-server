const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopee', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const CategoryColumnSchema = new Schema({
    column: Number,
    categories: [],
});

const CategoryColumnModel = mongoose.model(
    'category-column',
    CategoryColumnSchema
);

module.exports = CategoryColumnModel;
