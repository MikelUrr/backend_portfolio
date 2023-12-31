import mongoose from "mongoose";
import mongodb from "./../config/mongodb.js";



const contactmeSchema = new mongoose.Schema({
    firstName: {
      type: String,
      
    },
    lastName: {
      type: String,
      
    },
    email: {
      type: String,
      
    },
    phoneNumber: {
      type: Number,
      
    },
    topic: {
      type: String,
      
    },
    message: {
      type: String,
     
    },
    answered: {
        type: Boolean,
        default: false,
    },
    conctactDate: {
      type: Date,
      default: Date.now
  },
  followup: {
    type: String,
     
  },
  closed:{
    type: Boolean,
        default: false,
  }

    
  });
  
  const ContactmeModel = mongoose.model('Contactme', contactmeSchema);
  
 export default ContactmeModel;