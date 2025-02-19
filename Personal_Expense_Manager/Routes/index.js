import express from 'express'
import mongoose, { Schema } from 'mongoose';
import { Link } from 'react-router-dom';

const router = express.Router();
const userSchema = new mongoose.Schema({
    username:{type:String , required:true},
    email:{type:String, required:true},
    password:{type:String,required:true}
})

const Login_details = mongoose.model('Login_details', userSchema);

router.post('/signup',async (req,res)=>{
    
        const existingUser =  await Login_details.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(200).json({ message: "User already exists. Please login." });
        }
        
        console.log(req.body);
        const newUser =  new Login_details(req.body)

        newUser.save();

    
})

router.post('/login' ,async (req,res)=>{
    const usercheck = await Login_details.findOne({username:req.body.username,password:req.body.password});
    if(!usercheck){
        return res.status(400).json({ message: "Incorrect Username Or Password" });
    }
    
})
export default router;


// 201 for successful signup
// 400 if the user already exists
// 500 for server errors