const jwt=require('jsonwebtoken')
const key='vk 113 in 50 vs kxipkey'
const setUser=(user)=>{
    const {_id,firstName,Admin,state}=user
    return jwt.sign({_id,username:firstName,Admin,state},key)
}
const getUser=(token)=>{
    return jwt.verify(token,key)
}
module.exports={setUser,getUser}