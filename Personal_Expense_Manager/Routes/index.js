import express from 'express'
import mongoose, { Schema } from 'mongoose';

const router = express.Router();
const userSchema = new mongoose.Schema({
    username:{type:String , required:true},
    email:{type:String, required:true},
    password:{type:String,required:true}
})

const Login_details = mongoose.model('Login_details', userSchema);

router.post('/login',(req,res)=>{

        
        console.log(req.body);
        const newUser =  new Login_details(req.body)

        newUser.save();
    
})
export default router;
