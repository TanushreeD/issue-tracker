const mongoose = require('mongoose');

const url = "mongodb+srv://tee:tanu13@cluster0.m0vbw.mongodb.net/issueTracker?retryWrites=true&w=majority";
//premise
mongoose.connect(url)
//thnc is shortcut to write then n catch

.then(() => {
    console.log('connected to database');
    
}).catch((err) => {
    console.error(err);
    
});

module.exports = mongoose;