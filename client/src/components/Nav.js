import React from 'react';
import logo from './utils/logo.png'
import userlogo from './utils/userlogo.png'
import dash from './utils/3dash.png'
import './css/Nav.css'
const Navbar = ({username,setpage,Admin}) => {
  const removeClass=(e)=>{
    const target=e.target
    const targs=document.querySelector('.clicked')
    targs.className=''
    target.className='clicked'
  }
  const clos=(style)=>{
    return function(){
      document.querySelector('#main').style.display=style
    }
  }
  return (
    <div id="nav-bar">
    <div id="nav">
      <img src={dash} alt="" id="dash" onClick={()=>{
        const noneStyle=clos('none')
        const blockStyle=clos('block')
        if(document.querySelector('#main').style.display==='none')
          blockStyle()
        else
          noneStyle()
        
      }} />
      <img src={logo} alt="" />
    <nav>
      <ul>
        <li  className='clicked' onClick={(e)=>{
          removeClass(e)
            setpage(1)
        }}>Home</li>
        <li  onClick={(e)=>{
          removeClass(e)
            setpage(2)
        }}>Friends</li>
        <li  onClick={(e)=>{
          removeClass(e)
            setpage(3)
        }}
        >Profile</li>
        { Admin &&
        <li  onClick={(e)=>{
          removeClass(e)
            setpage(4)
        }}>Users</li>}
          <li onClick={()=>{
            sessionStorage.setItem('login',0)
            window.location.href='/'
          }} >Log Out</li>
        
      </ul>
    </nav>
    <div id="user-section">
      <img src={userlogo} alt="" />
    <div id="username">{username}</div>
    </div>
    
    </div>
    <div id="main">
    <ul>
        <li  className='clicked' onClick={(e)=>{
          removeClass(e)
            setpage(1)
        }}>Home</li>
        <li  onClick={(e)=>{
          removeClass(e)
            setpage(2)
        }}>Requests</li>
        <li  onClick={(e)=>{
          removeClass(e)
            setpage(3)
        }}
        >Profile</li>
        <li  onClick={(e)=>{
          removeClass(e)
            setpage(4)
        }}>Users</li>
          <li onClick={()=>{
            sessionStorage.setItem('login',0)
            window.location.href='/'
          }} >Log Out</li>
        
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
