const { getUser } = require('../services/userToSession');
const checkIsAdmin=async(req,res,next)=>{
    const token=req.cookies.token
    if(!token)
    return res.status(400).json({"error":"invalid token"})
    const user=getUser(token)
    if(!user)
    return res.status(400).json({"error":"user not found"})
    if(!user.Admin)
    return res.status(400).json({"error":"Not an Admin"})
    next()
}

module.exports=checkIsAdmin