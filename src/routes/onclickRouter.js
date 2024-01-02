import onclickApicontroller from '../controllers/onclickApiController.js';
import { Router } from 'express';
import isAuthenticatedApi from "./../middlewares/authMiddleware.js"

const router = Router();

router.post('/', (req, res) => {
    onclickApicontroller.createClick(req, res);
  });


router.get("/",isAuthenticatedApi,(req,res)=> {
    onclickApicontroller.getAllClicks (req, res);
})