import {Router} from 'express';
import callback from '../callback/index.js';

const router=Router()

router.get('/all',callback.all)

router.get('/id/:id',callback.id)

router.get('/del/:id',callback.del)

export default router;