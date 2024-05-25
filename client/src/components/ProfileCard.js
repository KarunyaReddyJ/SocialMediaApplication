import React from 'react'
import './css/ProfileCard.css'
import dlt from './utils/bin.jpeg'
function ProfileCard({user,Admin}) {
    const sendRequest=()=>{
        fetch('http://localhost:5000/request',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({receiver:user._id}),
            credentials:"include"
        })
        .then(res=>{
            if(res.ok)
                alert('request sent')
            else
                alert('request not sent')
        })
        .catch(err=>console.log(err))
    }
    const deleteUser=async()=>{
      fetch('http://localhost:5000/user',{
        method:'DELETE',
        headers:{
          "Content-Type":"application/json"
        }
        ,body:JSON.stringify({id:user._id})
        ,credentials:"include"
      })
      .then(res=>{
        if(res.ok)
          alert('deleted user')
        else
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    }
    const style={
      color:(user.Admin)?'red':'black'
    }
  return (
    <div id="profile">
 <img src="https://th.bing.com/th?id=OSK.67c1b2e26b1fbba303979ae68213b79e&w=102&h=102&c=7&o=6&pid=SANGAM" alt="" /> 
 <div id="non-pic">
      <div id="name">
      <div id="first-name" style={style} >{user.firstName+' '+user.lastName}</div>
      </div>
      <div className='request-delete'>
      <div id="request" onClick={sendRequest} >+</div>
      {
        Admin && <img style={{scale:'0.3'}} onClick={deleteUser} id="delete" src={dlt} alt="user" />
      }
      </div>
    </div></div>
  )
}

export default ProfileCard
