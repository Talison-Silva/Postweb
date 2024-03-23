import callback from '../callback/index.js';
import {Router} from 'express';
import verifyToken from '../middleware/verifytoken.js'
const Postagens=Router()

Postagens.get('/:id?',verifyToken,callback.GetedPOSTAGENS)
Postagens.post('/',verifyToken,callback.PostedPOSTAGENS)
Postagens.delete('/:id',verifyToken,callback.DeletedPOSTAGENS)
Postagens.put('/',verifyToken,callback.PutedPOSTAGENS)

export default Postagens;
