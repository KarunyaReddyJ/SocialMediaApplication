const router = require('express').Router()
const {User,Post}=require('../model/user')
const {getUser}=require('../services/userToSession')
router.route('/')
.put(async(req,res)=>{
    const {postId}=req.body
   try {
    const post=await Post.findOne({_id:postId})
    if(!post)
        return res.status(400).json({"message":"logged in"})
    const likes=post.likes
    const user=getUser(req.cookies.token)
    const _id=user._id
    const alreadyLiked=likes.includes(_id)
    if(alreadyLiked){
        return res.status(400).json({_id})
    }
    post.likes.push(_id)
    const updatedPost=await post.save()
    if(updatedPost)
        return res.status(200).json({"error":"likes"})
   } catch (error) {
    console.log(error)
   }
})
router.route('/:id')
.get(async(req,res)=>{
    const _id=req.params.id
    const post=await Post.findOne({_id})
    const likes=post.likes
    console.log(likes)
    try {
    const arr=[]
    if(likes.length===0)
        return res.status(400).json({arr})
    for(const like of likes){
        const user=await User.findOne({_id:like})
        console.log(user)
        arr.push(user.firstName)
    }
    
    if(likes)
        return res.status(200).json({arr})
    } catch (error) {
        console.log('likes error',error)
    }
})

module.exports=router