import callback from '../callback/index.js';
import {Router} from 'express';
import verifyToken from '../middleware/verifytoken.js'
const Users=Router()

Users.get('/',verifyToken,callback.GetedUSERS)
Users.get('/me',verifyToken,callback.me)
Users.post('/authenticate',callback.authenticated)
Users.post('/register',callback.register)

export default Users;
