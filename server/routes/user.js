const router = require('express').Router();
const { getUser } = require('../services/userToSession');
const {User,Post}=require('../model/user')

router.route('/')
.get(async(req,res)=>{
  const users=await User.find({});
  res.status(200).json({users})
})
.delete(async(req,res)=>{
    try {
      const {id}=req.body
    const user= await User.findByIdAndDelete(id)
    console.log(id)
    if(user)
      res.status(200).json({success:true})
    else
      res.status(400).json({"error":"user not found"})
    } catch (error) {
      console.log('delete user error',error)
    }
})

module.exports = router;