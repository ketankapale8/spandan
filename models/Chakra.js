import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

const ChakraSchema = new mongoose.Schema({
    title :{
        type : String,
        required: true,
    },
    question :{
        type : String,
        required : true,
    },
    questionDesc :{
        type : String,
        required: true,
    },
    questionPic :{
        type : String,
        required : true,
    },

    option1Input :{
        type : String,
        required: true,
    },
    option1Title :{
        type : String,
        required : true,
    },
    option3Title :{
        type : String,
        required : true,
    },
    option3Input :{
        type : String,
        required : true,
    },
    option2Input :{
        type : String,
        required: true,
    },
   option2Title :{
        type : String,
        required : true,
    },
    option4Input :{
        type : String,
        required: true,
    },
   option4Title :{
        type : String,
        required : true,
    },



    option5Title :{
        type : String,
        required : true,
    },
    option5Input :{
        type : String,
        required : true,
    },
    option6Input :{
        type : String,
        required: true,
    },
   option6Title :{
        type : String,
        required : true,
    },
    option7Input :{
        type : String,
        required: true,
    },
   option7Title :{
        type : String,
        required : true,
    },
    
   
    
})



export const Chakra = mongoose.model('Chakra', ChakraSchema)