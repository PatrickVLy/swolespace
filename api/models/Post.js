const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    }, 
    
    exercises:[
        firstExercise, {
        type: String,
        required: true,
    }, 

    firstExerciseWeight, {
        type: Number,
        required: true,
    }, 
    
    firstExerciseWeight, {
        type: Number,
        required: true,
    }, ],
    

    description:{
        type: String, 
        required: true,
        unique: true,
    }, 
    
    
    photo:{
        type: String, 
        required: false,
        default: "",
    }, 

    username:{
        type: String,
        required: true,
    }, 

    categories:{
        type: Array,
        required: false,
    }, 
},
{ timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);