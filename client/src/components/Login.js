import React, { useState } from 'react';
import './css/Login.css'
const LoginPage = ({setLogged,setHaveAccount}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
       await fetch('http://localhost:5000/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
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
      setError('Error logging in. Please try again.'); 
      console.error('Error logging in:', error);
    })
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
          name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {error && <div className="error" style={{color:"red"}} >{error}</div>} 
        <button type="submit">Login</button>
      </form>
    <p onClick={()=>{
      setHaveAccount(false)
    }} >Don't have account</p>
    </div>
  );
};

export default LoginPage;
