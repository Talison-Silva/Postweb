import {get,post,deleted,put} from '@/api/controllers/posts-controller.ts';
import verifyToken from '@/api/middleware/verifytoken.js'
import {Router} from 'express';

const routesPSTS=Router();

routesPSTS.get('/:id?',verifyToken,get)
routesPSTS.post('/',verifyToken,post)
routesPSTS.delete('/:id',verifyToken,deleted)
routesPSTS.put('/',verifyToken,put)

export { routesPSTS };