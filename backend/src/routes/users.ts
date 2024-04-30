import {get,authenticate,register,myAccount} from '@/api/controllers/users-controller.ts';
import verifyToken from '@/api/middleware/verifytoken.js'
import {Router} from 'express';

const routesSRS=Router();

routesSRS.post('/authenticate',authenticate)
routesSRS.get('/myAccount',verifyToken,myAccount)
routesSRS.post('/register',register)
routesSRS.get('/',verifyToken,get)

export { routesSRS };