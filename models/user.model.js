const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    phone: Number,
});
const userModel = mongoose.model('user', userSchema);

class userServiceModel {
    static async findUserByUsername(username) {
        return await userModel.findOne({ username : username });
    }
    static async findUserByEmail(email) {
        return await userModel.findOne({ email : email });
    }
    static async registerUser(newUser) {
        return await userModel.create(newUser);
    }
}

module.exports = userServiceModel;