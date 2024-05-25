import React,{useEffect,useState} from 'react'
import Post from './Post';
import './css/Home.css'
import InputField from './InputField';
import Populate from './Populate';
function Home({myId}) {
const [posts, setPosts] = useState([]);
const [writePost, setWritePost] = useState(false);
    const fetchPosts=()=>{
      fetch('http://localhost:5000/post',{
        credentials:"include"
      })
      .then(data=>data.json())
      .then(data=>{
        const {posts}=data
        setPosts(posts)
      })
    }
    useEffect(() => {
      fetchPosts()
    },[]);

  return (
    <div id="Home">

      {posts.length>0? posts.map(post=>{
        return <Post key={post._id} content={post.content} author={post.author} _id={post._id} likes={post.likes} myId={myId} authorId={post.authorId} comments={post.comments} />
      }):<h1>No Posts</h1>}
      {writePost?
      <InputField setWritePost={setWritePost} endPoint={'post'} type={'POST'} buttonText={'Post'} postId={''} />
      :<button id="btn" onClick={()=>{
        setWritePost(prev=>!prev)
      }} >+</button>}


      {/* <Populate/> */}
    </div>
  )
}

export default Home
