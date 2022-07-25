const{Schema, model}= require('../connection');

const myschema = new Schema({
    title: String,
    description: String,
    assign:Object,
    asdt: Date,
    status: String
});
module.exports = model('Issues', myschema);