const {Schema, model, Types} = require('../connection');

const schemaObj=new Schema({
    username:String,
    mobile: String, 
    age : Number,
    email : String,
    password: String,
    team : {type : Types.ObjectId ,  ref : 'teams'}
})

module.exports = model('users', schemaObj);
