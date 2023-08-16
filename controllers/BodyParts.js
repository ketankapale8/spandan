import {BodyParts} from '../models/BodyParts.js';


//add schema

export const addBodyPartsData = async (req ,res) => {
    try{
        const {title , question , questionDesc , questionPic , option1Input , option2Input , option1Title , option2Title ,  
            option3Title , option3Input , option4Title , option4Input
        
        
        } = req.body;
        const newQuestion = await BodyParts.create({
            title , question , questionDesc , questionPic , option1Input , option2Input , option1Title , option2Title , option3Title , option3Input , option4Title , option4Input
        })
        
        await newQuestion.save();

        res.status(200).json({newQuestion , msg: 'new question saved'})



    }catch(err){
        console.log(err)
    }
}