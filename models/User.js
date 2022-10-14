const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopee', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
