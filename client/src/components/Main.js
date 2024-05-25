import React,{useEffect,useState} from 'react'
import Navbar from './Nav'
import Home from './Home';
import Request from './Request';
import Profile from './Profile';
import './css/Main.css'
import Users from './Users';
import Friends from './Friends';
function Main() {
    const [user, setuser] = useState('');
    const [page, setpage] = useState(1);
    const [reqs, setreq] = useState([]);
    const getData=async()=>{
        await fetch('http://localhost:5000/detail',{
            credentials:"include"
        })
        .then(data=>data.json())
        .then(data=>{
            const {account}=data
            setuser(account)
        })
        .catch(err=>console.log(err))
    }
    const getRequests=()=>{
        fetch('http://localhost:5000/request',{
            credentials:"include"
        })
        .then(data=>data.json())
        .then(data=>{
            const {arr}=data
            setreq(arr)
        })
    }
    useEffect(() => {
      getData()
      getRequests()
    }, []);
  return (
    <div id="Main">
      <Navbar username={`${user.firstName} ${user.lastName}`} setpage={setpage} Admin={user.Admin} />
      {page===1 &&<Home myId={user._id} /> }
      {page===2 &&<Friends reqs={reqs}/>  }
      {page===3 && <Profile user={user} Admin={user.Admin} /> }
      
      {page===4 &&  <Users/> }
    </div>
  )
}

export default Main
