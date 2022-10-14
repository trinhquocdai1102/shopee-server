const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopee', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const MallColumnSchema = new Schema({
    column: Number,
    list: [],
});

const MallColumnModel = mongoose.model('mall-column', MallColumnSchema);

module.exports = MallColumnModel;
