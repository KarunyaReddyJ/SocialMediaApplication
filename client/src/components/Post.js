import React,{useState} from 'react'
import './css/Post.css'
import dlt from './utils/bin.jpeg'
//import like from './utils/like.png'
import InputField from './InputField'
function Post({myId,authorId,_id,author,content,likes,comments}) {
  const [comment, setComment] = useState(false);
  const [Likes, setLikes] = useState([]);
  const [Comments, setComments] = useState([]);
  const hitLike=async ()=>{
    const res=await fetch('http://localhost:5000/likes',{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      credentials:"include",
      body:JSON.stringify({postId:_id})
    })
    if(res){
      if(res.ok)
        window.location.href='/'
      else
        alert('unable to like')
    }
  }
  const deletePost=()=>{

      fetch('http://localhost:5000/post',{
        method:'DELETE',
        headers:{
          "Content-Type":"application/json"
        },
        credentials:"include",
        body:JSON.stringify({_id})
      })
      .then(res=>{
        if(res.ok)
          window.location.href='/'
        else
          alert('unable to delete post')
      })
    }
  
  const getLikes=()=>{
    
    fetch(`http://localhost:5000/likes/${_id}`,{
    })
    .then(dat=>dat.json())
    .then(data=>{
      const {arr}=data
      setLikes(arr)
      console.log(arr)
      document.querySelector('#likes').style.display='block'

      setTimeout(() => {
        document.querySelector('#likes').style.display='none'
      }, 1500);
    })
  }
  const getComments=()=>{
    
    fetch(`http://localhost:5000/comment/${_id}`,{
    })
    .then(dat=>dat.json())
    .then(data=>{
      const {commentRecord}=data
      setComments(commentRecord)
      console.log(commentRecord)
      document.querySelector('#comments').style.display='block'

      setTimeout(() => {
        document.querySelector('#comments').style.display='none'
      }, 1500);
    })
  }
  return (
    <>
    <div className='post'>
      <div id="top">
      <div className="author">{author}</div>
      {
        myId===authorId && <p onClick={deletePost} > <img className='delete'  src={dlt} alt="" /> </p>
      }
      </div>
     <div className="content">{content}</div> 
     <hr /> 
     <div id="like-comments">
      <span className='likes' onMouseOver={getLikes} onClick={hitLike} >likes: <span>{(likes && likes.length)}</span> </span>
    
      <span className="comments" onClick={()=>{
        setComment(prev=>!prev)
      }} 
      onMouseOver={getComments}> comments: {comments && comments.length} </span>

      <span className="shares" onClick={()=>{
        sharePost(_id)
      }} >
        share:
      </span>
      </div>
    </div>
    <ul id="likes" style={{display:'none'}}>
      {Likes.map(Like=>{
        return <li key={Like} > {Like} </li>
      })}
    </ul>
    <div id="comment">
      {comment && <InputField setWritePost={setComment} postId={_id} type={'PUT'} buttonText={'Comment'}  endPoint={'comment'}/> }
    </div>
    <ul id="comments" style={{display:'none'}}>
      {Comments.map(Like=>{
        return (<> <li key={Like} > {Like.commentator} <br/> {Like.comment} </li> <br/></>)
      })}
    </ul>
    </>
  )
}

export default Post



function sharePost(_id){
  const div=document.createElement('div')
  div.innerText=`http://localhost:5000/post/${_id}`
  document.querySelector(`.post`).appendChild(div)
  div.addEventListener('dblclick',()=>{
    div.style.display='none'
  })
}