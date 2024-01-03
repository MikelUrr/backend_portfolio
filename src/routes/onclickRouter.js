import onclickApiController from '../controllers/onclickController/onclickApiController.js';
import { Router } from 'express';
import isAuthenticatedApi from "./../middlewares/authMiddleware.js"

const router = Router();

router.post('/', (req, res) => {
  onclickApiController.createClick(req, res);
  });


router.get("/",isAuthenticatedApi,(req,res)=> {
  onclickApiController.getclickstats (req, res);
})

export default router;