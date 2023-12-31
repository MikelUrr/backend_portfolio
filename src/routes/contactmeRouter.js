import contactmeApiController from "./../controllers/contactmeController/contactmeApiController.js";
import { Router } from 'express';

const router = Router();


router.post('/', (req, res) => {
    contactmeApiController.createContact(req, res);
  });

router.get("/",(req,res)=> {
    contactmeApiController.getAllContacts(req, res);
})

  export default router;