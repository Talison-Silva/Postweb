import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload'
import {resolve} from 'path';
//import router from './src/router/post/index.js';
import Postagens from './src/routes/methods/postagens.js';
import Users from './src/routes/methods/users.js';
import 'dotenv/config'


const app=express()

/*
configuração
    configuração -cors
    comfiguração para o uso de json
    comfiguração do body-parser
*/

app.use(cors());
app.use(express.json());
app.use( fileUpload({ createParentPath: true }) );
app.use(express.static(resolve('./src/uploads/')));
app.use(bodyParser.urlencoded({extended:false}));

//routers
app.use('/application',Postagens);
app.use('/users',Users);


export default app;
