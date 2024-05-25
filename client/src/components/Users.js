import React,{useEffect,useState} from 'react'
import ProfileCard from './ProfileCard';

function Users() {
  const [users, setusers] = useState([]);
  const fetchUsers=async()=>{
    fetch('http://localhost:5000/user',{
      credentials:"include"
    })
    .then(data=>data.json())
    .then(data=>{
      setusers(data.users)
    })
    .catch(err=>console.log('err',err))
  }
  useEffect(() => {
    fetchUsers()
  }, [users]);
  return (
    <div>
          {
        users.map(user=>{
          return ( <ProfileCard key={user._id} Admin={true} user={user} />)
      })}
    </div>
  )
}

export default Users
