import React,{useState} from 'react'
import ProfileCard from './ProfileCard';
import './css/Profile.css'
function Profile({user,Admin}) {
    const [profiles, setProfiles] = useState([]);
    const [username, setUsername] = useState('');
    const getData=async()=>{
        
     fetch(`http://localhost:5000/detail/${username}`)
        .then(data=>data.json())
        .then(data=>{
            const {user}=data
            console.log(user)
        setProfiles(user)})
    }
    
  return (
    <div className='profile'>
      <div id="my-profile">
         <div className="profile-photo"> <img src="https://th.bing.com/th?id=OSK.67c1b2e26b1fbba303979ae68213b79e&w=102&h=102&c=7&o=6&pid=SANGAM" alt="" /> </div>
      <div id="first-name">{user.firstName}</div>
      <div id="last-name">
        {user.lastName}
      </div>
    
        <input type="text" name="username" value={username} onChange={(e)=>{
            setUsername(e.target.value)
        }} placeholder='search for user' />
        <button onClick={getData} >search</button>
        </div>
        <div id="profiles">
            {
                profiles.map(profile=>{
                    return ( <ProfileCard user={profile} Admin={Admin} /> )
                })
            }
        </div>
    </div>
  )
}

export default Profile
