import router from '../get/index.js';
import callback from '../callback/index.js';

router.post('/add',callback.add);

router.post('/edit',callback.edit)

export default router;