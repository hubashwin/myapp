const mongoosh = require('mongoose');

const UserSchema = new mongoosh.Schema({
    name: String,
    email: String,
    password: String
})

const UserModel = mongoosh.model('users', UserSchema);

module.exports = UserModel;