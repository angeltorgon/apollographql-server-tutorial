const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
   id: Number,
    name: String,
    email: String
})

const BookSchema = mongoose.Schema({
   id: Number,
    name: String,
    authorId: Number
})

const AuthorModel = mongoose.model('Authors', AuthorSchema);
const BoookModel = mongoose.model('Books', BookSchema);

module.exports = {
    AuthorModel,
    BoookModel
}