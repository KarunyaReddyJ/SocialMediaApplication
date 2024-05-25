import React,{useState} from 'react'

function InputField({setWritePost,endPoint,type,postId,buttonText}) {
    
    const [content, setContent] = useState('');
    const addPost=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:5000/${endPoint}`,{
          method:type,
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({postId,content}),
          credentials:"include"
        })
        .then(res=>{
          if(res.ok)
            window.location.href='/'
          else
            alert('unable to post')
        })
        .catch(err=>console.log(err))
      }
  return (
    <form id="post-area" onSubmit={addPost}>
        <div id="cross" onClick={()=>{
        setWritePost(prev=>!prev)
      }}>x</div>
        <input type="text" name="content" id="" onChange={(e)=>{
          setContent(e.target.value)
        }} value={content} placeholder='content'  required/>
        <input type="submit" value={buttonText} />
      </form>
  )
}

export default InputField
