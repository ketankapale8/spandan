import express from 'express';
import UserRouter from './routes/User.js';
import PositveNegativeRouter from './routes/postivenegative.js';
import ChakraRouter from './routes/chakra.js';
import DiseasesRouter from './routes/diseases.js';
import VaastuRouter from './routes/vaastu.js';
import BodyPartsRouter from './routes/bodyparts.js';
import NadiRouter from './routes/nadi.js';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import cors from 'cors'
export const app = express();

const corsOptions ={
    origin:'*', 
    credentials:false,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 
    
app.use(cors(corsOptions))
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended:true , limit: '50mb'}))
app.use(cookieParser());
app.use(fileUpload({
    limits:{
        fileSize : 50 * 1024 * 1024
    },
    useTempFiles: true
}))


console.log('rajakldjad')

app.use('/api/v1', UserRouter);
app.use('/api/v1', PositveNegativeRouter);
app.use('/api/v1', BodyPartsRouter);
app.use('/api/v1', NadiRouter);
app.use('/api/v1', DiseasesRouter);
app.use('/api/v1', VaastuRouter);
app.use('/api/v1', ChakraRouter);


app.get('/', (req,res)=>{
    res.send('Running Spandan.. Backend..')
})

