const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname : {type: String, required: true},
    lastname : {type: String, required: false},
    age : {type: Number, required: true},
    email:{type: String, required:true, unique: true}
},{
    versionKey:false,
    timestamps: true,
})

module.exports = mongoose.model("user",userSchema);