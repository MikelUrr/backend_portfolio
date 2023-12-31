import { Router } from 'express';
import contactmeRouter from "./contactmeRouter.js"
import auth from "./auth.js"



const router = Router();

router.use ('/contactme', contactmeRouter);
router.use ('/login', auth)





export default router;