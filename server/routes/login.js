const router = require('express').Router()
const {User}=require('../model/user')
const {setUser}=require('../services/userToSession')
router.route('/')
.post(async(req,res)=>{
    try {
        console.log('entered')
    const {email,password}=req.body
    const user=await User.findOne({email,password})
    if(user){
        const token=setUser(user)
        res.cookie('token',token)
        res.status(200).json({"message":"logged in"})
    }
    else
        res.status(400).json({"error":"no user found"})
    } catch (error) {
        console.groupCollapsed(error)
    }
})

module.exports=router