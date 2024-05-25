import React,{useState,useEffect} from 'react'
import Request from './Request'
function Friends({reqs}) {
    const [suggestions, setSuggestions] = useState([]);
    const [page, setpage] = useState(0);
    const [Friends, setFriends] = useState([]);
    const getSuggestions=async()=>{
      
        await fetch('http://localhost:5000/request/suggestions',{credentials:"include"})
        .then(data=>data.json())
        .then(data=>{
          setSuggestions(data.suggestions)
          console.log(data.suggestions)
          
        })
      }
      const getFriends=async()=>{
        
        await fetch('http://localhost:5000/detail/friends',{credentials:"include"})
        .then(data=>data.json())
        .then(data=>{
          setFriends(data.Friends)
          console.log(data.Friends)
          
        })
      }
      useEffect(() => {
        if(page===1)
          getSuggestions()
        else if(page===2)
          getFriends()
      }, [page]);
  return (
    <div >
      <div style={{display:'flex',width:'300px',justifyContent:'space-between',margin:'auto'}} >
        <div onClick={()=>{
          setpage(0)
        }} >Requests</div>
        <div onClick={()=>{
          setpage(1)
        }} >Suggestions</div>
        <div onClick={()=>{
          setpage(2)
        }} >Friends</div>
      </div>
       {page===0 &&
         <div id="requests">
         <h1>Requests</h1>
      {reqs.length>0?
         reqs.map(req=>{
             return  <Request btn1={'Accept'} btn2={'Reject'} key={req.reqId} _id={req._id} reqId={req.reqId} username={req.firstName} />
         }): <h4>No requests</h4>
      }
         </div>
       }
       {
        page===1 &&
        
     <div id="suggestions">
     <h1>Suggestions</h1>
     {
        suggestions.map(req=>{
            return  <Request btn1={'Add Friend'} btn2={''} key={req.id} _id={req.id} username={req.username} />
        })
     }
     </div>
       }

       {
        page===2 && 
        <div id="Friends">
        <h1>Friends</h1>
          {
            Friends.map(req=>{
                return  <Request btn1={''} btn2={''} key={req._id} _id={req._id} username={req.username} />
            })
        }
        </div>
       }
    </div>
  )
}

export default Friends
