const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    { 
    title:{ type: String, required: true, unique: false }, 

    firstExercise: { type: String, required: false }, 
    firstExerciseWeight: { type: Number, required: false }, 
    firstExerciseSets: { type: Number, required: false },
    firstExerciseReps: { type: Number, required: false }, 

    secondExercise: { type: String, required: false }, 
    secondExerciseWeight: { type: Number, required: false }, 
    secondExerciseSets: { type: Number, required: false },
    secondExerciseReps: { type: Number, required: false }, 

    thirdExercise: { type: String, required: false }, 
    thirdExerciseWeight: { type: Number, required: false }, 
    thirdExerciseSets: { type: Number, required: false },
    thirdExerciseReps: { type: Number, required: false }, 

    fourthExercise: { type: String, required: false }, 
    fourthExerciseWeight: { type: Number,required: false }, 
    fourthExerciseSets: { type: Number, required: false },
    fourthExerciseReps: { type: Number, required: false }, 

    fifthExercise: { type: String, required: false }, 
    fifthExerciseWeight: { type: Number, required: false }, 
    fifthExerciseSets: { type: Number, required: false },
    fifthExerciseReps: { type: Number, required: false }, 

    sixthExercise: { type: String, required: false }, 
    sixthExerciseWeight: { type: Number, required: false }, 
    sixthExerciseSets: { type: Number, required: false },
    sixthExerciseReps: {type: Number, required: false },  

    description: { type: String, required: true, unique: false}, 
    
    photo:{ type: String, required: false, default: ""}, 

    username:{ type: String, required: true}, 

    categories:{ type: Array, required: false}, 
},
{ timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);