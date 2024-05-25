import React, { useState } from 'react';

const RegisterPage = ({setLogged,setHaveAccount}) => {
  const [formData, setFormData] = useState({
    firstName:'',
    middleName:'',
    lastName:'',
    email:'',
    password:'',
    city:'',
    state:'',
    country:''
  });
  const [Admin, setAdmin] = useState(false);
  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData(prev=>({
      ...prev,
      [name]:value
    }))
  }
  const handleAdmin=(e)=>{
    setAdmin(prev=>!prev)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
       fetch('http://localhost:5000/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({...formData,Admin}),
        credentials: "include"
      }).then(res=> {
        if(res.ok){
            setLogged(true)
            sessionStorage.setItem('login',1)
        }
      else 
        throw new Error('Login failed');
      })
    .catch (error=> {
      
      console.error('Error logging in:', error);
    })
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Middle Name</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
          name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>
          <input
          name="Admin"
          type="checkbox"
          checked={Admin}
          onChange={handleAdmin}
          />
          Admin</label>
        </div>
        
        <button type="submit">Register</button>
      </form>
    <p onClick={()=>{
      setHaveAccount(prev=>!prev)
    }} >Have account</p>
    </div>
  );
};

export default RegisterPage;
