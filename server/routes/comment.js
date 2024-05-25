const router = require('express').Router()
const {User,Post}=require('../model/user')
const {getUser}=require('../services/userToSession')
router.route('/')
.put(async(req,res)=>{
    const {postId,content}=req.body
    const comment=content
    const _id=getUser(req.cookies.token)._id
    const post=await Post.findOne({_id:postId})
    if(!post)
        res.status(400).json({"message":"logged in"})
    const comments=post.comments
    comments.push({commentor:_id,comment})
    await Post.findByIdAndUpdate(postId,{comments})
    res.status(200).json({"error":"commented"})
})


router.route('/:id')
.get(async(req,res)=>{
    const _id=req.params.id
    const post=await Post.findOne({_id})
    const comments=post.comments
    console.log(comments)
    try {
        const commentRecord=[]
        for(const comment of comments){
            const user=await User.findOne({_id:comment.commentor})
            commentRecord.push({commentator:`${user.firstName} ${user.lastName}`,comment:comment.comment})
        }
        res.status(200).json({commentRecord})
    } catch (error) {
        console.log(error)
        res.status(400).json({"error":"cannot find"})
    }
})
module.exports=router