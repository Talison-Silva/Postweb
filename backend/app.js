import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from './src/router/post/index.js';

const app=express()

/*
configuração
    configuração -cors
    comfiguração para o uso de json
    comfiguração do body-parser
*/

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

//routers
app.use('/resources',router);


export default app;