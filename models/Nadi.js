import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

const NadiSchema = new mongoose.Schema({
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
    
   
    
})

// userSchema.pre("save" ,async function(next){
//     if(!this.isModified("password")) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password ,salt);
//     next()
// });



// userSchema.methods.getJWTToken = function() {
//     return jwt.sign({
//         _id : this._id
//     }, process.env.JWT_SECRET , {
//     expiresIn : process.env.JWT_COOKIE_EXPIRES *24 * 60 * 60 * 1000

//     })
    
// };

// userSchema.methods.comparePassword = async function (password) {
//     return await bcrypt.compare(password, this.password);
//   };


// userSchema.index({otp_expiry:1}, {expireAfterSeconds: 0})

export const Nadi = mongoose.model('Nadi', NadiSchema)