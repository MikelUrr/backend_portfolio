import mongoose from "mongoose";
import mongodb from "./../config/mongodb.js";



const onClickSchema = new mongoose.Schema({
    time: {
      type: String,
      
    },
    clickedUrl: {
      type: String,
      
    },
    userinfo: {
      type: String,
      
    },

    componentInfo: {
      type: String,
      
    }
  });
  
  const onClickModel = mongoose.model('Contactme', onClickSchema);
  
 export default onClickModel;