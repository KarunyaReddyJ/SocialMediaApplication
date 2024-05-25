const router = require('express').Router()
const {User,Post}=require('../model/user')
const {getUser}=require('../services/userToSession')
 router.route('/')
.get(async (req, res) => {
  try {
    const token = req.cookies.token;
    const userId=getUser(token)._id
    if(!token){
      return  res.status(400).json({"error":"Invalid token"})
    }
    const user=await User.findOne({_id:userId})
    const friends=user.friends
    friends.push(userId)
   const postsPromises = friends.map(async (friend) => {
     const posts=await Post.find({ author: friend });
      const author=await User.findOne({_id:friend});
      const arr=[]
      posts.forEach(post=>{
        console.log(post.author)
        arr.push({_id:post._id,content:post.content,likes:post.likes,author:`${author.firstName} ${author.lastName}`,authorId:author._id,comments:post.comments})
      })
      
    return arr
  });
  const postArr = await Promise.all(postsPromises);
  const flattenedPostArr = postArr.flat();
  res.status(200).json({ posts: flattenedPostArr });
   } catch (error) {
    console.error('Error fetching posts:', error);
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
})


.post(async(req,res)=>{
    const {content}=req.body
    try {
      const _id=getUser(req.cookies.token)._id
    const user=await User.findOne({_id})
    if(user){
        const posted=await Post.create({author:_id,content})
        console.log('post',posted)
        if(posted)
            res.status(200).json({"message":"posted"})
    }
    else
        res.status(400).json({"error":"no user found"})
    } catch (error) {
      console.log('err',error)
    }
})
.delete(async(req,res)=>{
    const {_id}=req.body
    const post=await Post.deleteOne({_id})
    if(post)
        res.status(200).json({"message":"deleted"})
    else
        res.status(400).json({"error":"cannot delete"})
})

router.route('/:id')
.get(async(req,res)=>{
  const _id=req.params.id
  const post=await Post.findOne({_id})
  res.status(200).json({post})
})
module.exports=router