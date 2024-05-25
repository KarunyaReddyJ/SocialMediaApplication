import React from 'react'
import './css/Request.css'
import photo from './utils/user.png'
function Request({username,reqId,_id,btn1,btn2}) {
  
    const reactToReq=async(e)=>{
        if(btn2){
          const react=parseInt(e.target.className)
       // alert(reqId)
        fetch('http://localhost:5000/request',{
            method:'DELETE',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({reqId,react}),
            credentials:'include'
        })
        .then(res=>{
            if(res.ok)
                console.log(`Request ${e.target.id}ed`)
            else
                console.log('error')
        })
        .catch(err=>console.log(err))
        }
        else{
          fetch('http://localhost:5000/request',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({receiver:_id}),
            credentials:'include'
        })
        .then(res=>{
            if(res.ok)
                alert(`Request ${e.target.id}ed`)
            else
                alert('error')
        })
        .catch(err=>console.log(err))
        }
    }
    
  return (
    <div id="request-page">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap')
</style>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}} >
      <div style={{width:'20px',borderRadius:'20px'}}>
    <img src={photo} style={{width:'20px'}} alt="" /></div>
          <div id="username">{username}</div>
      </div>
      {btn1 &&
        <div id="accept-buttons">
        <button id="accept" className='1' onClick={reactToReq} > {btn1} </button>
        { btn2 &&
        <button id="reject" className='0' onClick={reactToReq} > {btn2} </button>}
        </div>
      }
    </div>
  )
}

export default Request
