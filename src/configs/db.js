const mongoose = require("mongoose");

module.exports = () =>{
    mongoose.connect("mongodb+srv://evaluation:ding@cluster0.d7aco.mongodb.net/evaluation?retryWrites=true&w=majority")
}