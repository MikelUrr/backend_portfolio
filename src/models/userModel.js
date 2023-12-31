import mongoose from "mongoose";
import mongodb from "../config/mongodb.js";



const userSchema = new mongoose.Schema({
    
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    
  });
  
  const UserModel = mongoose.model('user', userSchema);
  
 export default UserModel;