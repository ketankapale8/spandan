import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

const VaastuSchema = new mongoose.Schema({
    title :{
        type : String,
        required: false,
    },
    question :{
        type : String,
        required: false,
    },
    questionDesc :{
        type : String,
        required: false,
    },
    questionPic :{
        type : String,
        required: false,
    },

    option1Input :{
        type : String,
        required: false,
    },
    option1Title :{
        type : String,
        required: false,
    },
    option3Title :{
        type : String,
        required: false,
    },
    option3Input :{
        type : String,
        required: false,
    },
    option2Input :{
        type : String,
        required: false,
    },
   option2Title :{
        type : String,
        required: false,
    },
    option4Input :{
        type : String,
        required: false,
    },
   option4Title :{
        type : String,
        required: false,
    },



    option5Title :{
        type : String,
        required : false,
    },
    option5Input :{
        type : String,
        required : false,
    },
    option6Input :{
        type : String,
        required: false,
    },
   option6Title :{
        type : String,
        required : false,
    },
    option7Input :{
        type : String,
        required: false,
    },
   option7Title :{
        type : String,
        required : false,
    },

    option8Input :{
        type : String,
        required: false,
    },
   option8Title :{
        type : String,
        required : false,
    },
    option9Input :{
        type : String,
        required: false,
    },
   option9Title :{
        type : String,
        required : false,
    },
    
    
   
    
})



export const Vaastu = mongoose.model('Vaastu', VaastuSchema)