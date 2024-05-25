const router = require('express').Router();
const { getUser } = require('../services/userToSession');
const {User,Post}=require('../model/user')
router.route('/')
  .get(async (req, res) => {
    try {
      const token = req.cookies.token;
      if (!token) {
        return res.status(401).json({ error: 'Token missing' });
      }
      const user = getUser(token);
      console.log(user);
      if (!user || !user.username) {
        return res.status(401).json({ error: 'Invalid token' });
      }
      const account=await User.findOne({_id:user._id})
      res.status(200).json({ account });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
router.route('/friends')
.get(async(req,res)=>{
  try {
    const token=req.cookies.token
    const user=getUser(token)
    const _id=user._id 
    const u=await User.findOne({_id})
    const friends=u.friends
    console.log('f',friends)
    if(!friends)
      return res.status(400).json({"message":"no friends"})
    const Friends=[]
    for(let friend of friends){
      const F=await User.findOne({_id:friend})
      Friends.push({username:`${F.firstName} ${F.lastName}`,_id:F._id})
    }
    res.status(200).json({Friends})
  } catch (error) {
    console.log('friend',error)
  }
})
router.route('/:name')
.get(async(req,res)=>{
  const name=req.params.name
  var found=true
  var user=await User.find({firstName:name})
  if(user.length===0){
    user=await User.find({lastName:name})
    if(user.length===0){
      user=await User.find({middleName:name})
      if(user.length===0)
          found=false
    }
  }
  if(found)
    return res.status(200).json({user})
})

module.exports = router;
