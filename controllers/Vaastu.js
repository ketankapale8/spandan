import {Vaastu} from '../models/Vaastu.js';


//add schema

export const addVaastuData = async (req ,res) => {
    try{
        const {title , question , questionDesc , questionPic , option1Input , option2Input , option1Title , option2Title ,  
            option3Title , option3Input , option4Title , option4Input , 
            option5Title , option5Input , option6Title , option6Input,
            option7Title , option7Input,
            option8Title , option8Input,
            option9Title , option9Input,
            
        } = req.body;
        const newQuestion = await Vaastu.create({
            title , question , questionDesc , questionPic , option1Input , option2Input , option1Title , option2Title , option3Title ,
             option3Input , option4Title , option4Input,
             option5Title , option5Input , option6Title , option6Input,
            option7Title , option7Input,

            option8Title , option8Input,
            option9Title , option9Input,
        })
        
        await newQuestion.save();

        res.status(200).json({newQuestion , msg: 'new question saved'})



    }catch(err){
        console.log(err)
    }
}