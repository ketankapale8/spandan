import {Nadi} from '../models/Nadi.js';


//add schema

export const addNadiData = async (req ,res) => {
    try{
        const {title , question , questionDesc , questionPic , option1Input , option2Input , option1Title , option2Title ,  
            option3Title , option3Input 
        
        
        } = req.body;
        const newQuestion = await Nadi.create({
            title , question , questionDesc , questionPic , option1Input , option2Input , option1Title , option2Title , option3Title , option3Input 
        })
        
        await newQuestion.save();

        res.status(200).json({newQuestion , msg: 'new question saved'})



    }catch(err){
        console.log(err)
    }
}