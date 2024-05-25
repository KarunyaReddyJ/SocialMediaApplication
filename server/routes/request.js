const router = require('express').Router()
const {User,Request}=require('../model/user')
const { getUser } = require('../services/userToSession');
const { request } = require('express');
router.route('/')
  .get(async(req,res)=>{
    const token = req.cookies.token;
    const use = getUser(token)
    const user=use._id
    try {
      const requests = await Request.find({ receiver: user });
      const arr = await Promise.all(requests.map(async request => {
        const sender = await User.findOne({ _id: request.sender });
        return { firstName: sender.firstName, _id: sender._id,reqId:request._id };
      }));
      console.log(arr);
      res.status(200).json({ arr });
    } catch (error) {
      console.error('Error retrieving requests:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  })
  .post(async(req,res)=>{
    const {  receiver } = req.body;
    const token = req.cookies.token;
    const use = getUser(token)
    const sender=use._id
   
    console.log(receiver,sender)
    try {
      const user = await User.findOne({ _id: receiver });
      if (!user){
         return res.status(400).json({ message: "person not found" });}
         const friends= user.friends
         const isFriend = friends.includes(sender);
      if (isFriend){
          return res.status(400).json({ error: "Already a friend" });
        }
      const request = await Request.create({ sender, receiver });
      res.status(200).json({ message: request });
    } catch (error) {
      console.error('Error creating request:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  })
  .delete(async(req,res)=>{
    const {reqId,react}=req.body
    console.log(react,reqId)
    try {
        if(react===1){
            const request=await Request.findOne({_id:reqId})
            const sender=request.sender
            const receiver=request.receiver
            const senderAcc= await User.findOne({_id:sender})
            var friends=senderAcc.friends
            friends.push(receiver)
            await User.findByIdAndUpdate(sender,{friends})
            console.log('f',friends)
            const receiverAcc=await User.findOne({_id:receiver})
            friends=receiverAcc.friends
            friends.push(sender)
            await User.findByIdAndUpdate(receiver,{friends})
            await Request.deleteOne({_id:reqId})
            res.status(200).send(null)
        }
        else{
            await Request.deleteOne({_id:reqId})
            res.status(200).send(null)
        }
    } catch (error) {
        console.log(error)
        res.status(402).send(null)
    }
  })


router.route('/suggestions')
.get(async(req,res)=>{
  const token=req.cookies.token
  const user=getUser(token)
  const state=user.state
  console.log(user,state)
  const suggestions=[]
  try {
    const users=await User.find({state})
    if(!users)
      return res.status(400).json({"message":"no user found"})
    const u=await User.findOne({_id:user._id})
    const friends=u.friends
    friends.push(user._id)
      for(let u of users){
        const exist=friends.includes(u._id)
        if(!exist){
          suggestions.push({username:`${u.firstName} ${u.lastName}`,id:u._id})
        }
      }
      res.status(200).json({suggestions})
  } catch (err) {
    console.log('suggestion error',err)
  }
})
module.exports = router;
