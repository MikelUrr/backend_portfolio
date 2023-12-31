import contactmeApiController from "./../controllers/contactmeController/contactmeApiController.js";
import { Router } from 'express';
import isAuthenticatedApi from "./../middlewares/authMiddleware.js"

const router = Router();


router.post('/', (req, res) => {
    contactmeApiController.createContact(req, res);
  });
  router.delete('/:id', isAuthenticatedApi,(req, res) => {
    contactmeApiController.removeContact(req, res);
  });


router.get("/",isAuthenticatedApi,(req,res)=> {
    contactmeApiController.getAllContacts(req, res);
})
router.put('/', isAuthenticatedApi, (req, res) => {
  contactmeApiController.updateContact(req, res);
});

  export default router;