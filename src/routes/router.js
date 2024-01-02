import { Router } from 'express';
import contactmeRouter from "./contactmeRouter.js"
import auth from "./auth.js"
import onclickRouter from "./onclickRouter.js"


const router = Router();

router.use ('/contactme', contactmeRouter);
router.use ('/login', auth)
router.use ('/onclick', onclickRouter);




export default router;