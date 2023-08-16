import {PositiveNegative} from '../models/PositiveNegative.js';


//add schema

export const addPositiveNegativeData = async (req ,res) => {
    try{
        const {title , question , questionDesc , questionPic , option1Input , option2Input , option1Title , option2Title} = req.body;
        const newQuestion = await PositiveNegative.create({
            title , question , questionDesc , questionPic , option1Input , option2Input , option1Title , option2Title
        })
        
        await newQuestion.save();

        res.status(200).json({newQuestion , msg: 'new +ve/-ve question saved'})



    }catch(err){
        console.log(err)
    }
}