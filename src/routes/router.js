import { Router } from 'express';
import contactmeRouter from "./contactmeRouter.js"



const router = Router();

router.use ('/contactme', contactmeRouter);






export default router;