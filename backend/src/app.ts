import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload'
import {join} from 'path';
//import router from './src/router/post/index.js';
import Postagens from '@/routes/methods/postagens.js';
import Users from '@/routes/methods/users.js';
import 'dotenv/config';
import { routesPSTS } from '@/routes/posts.ts';
import { routesSRS } from '@/routes/users.ts';

var App=express()



App.use(cors());
App.use(express.json());
App.use( fileUpload({ createParentPath: true }) );

const test:number="talison"
console.log('test ~',test)
//App.use(express.static(join(import.meta.dirname,'uploads')));
App.use('/static',express.static(join(import.meta.dirname,'assets','upload')));
App.use(bodyParser.urlencoded({extended:false}));

// ~. routers
//App.use('/application',Postagens);
App.use('/new-users',routesSRS);
App.use('/new-posts',routesPSTS);
//App.use('/users',Users);


export {App};
