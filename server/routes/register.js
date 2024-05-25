const router = require('express').Router()
const {User}=require('../model/user')
const {setUser}=require('../services/userToSession')
router.route('/')
.post(async(req,res)=>{
    const {firstName,lastName,middleName,email,password,Admin,city,state,country}=req.body
    const user=await User.findOne({email})
    if(user)
       return res.status(400).json({"message":"email already used in"})
        const account=await User.create({firstName,lastName,middleName,email,password,Admin,city,state,country})
        const token=setUser(account)
        res.cookie('token',token)
        res.status(200).json({"message":"registered"})
})

module.exports=router