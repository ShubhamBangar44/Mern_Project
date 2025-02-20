import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate(); // For navigation after login

  function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload

    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    })
    .then((response) => response.json())
    .then(data => {
      if (data.message) {
        alert(data.message);
        if (data.success) {
          navigate('/dashboard'); // Redirect to dashboard if login is successful
        }
      }
    })
    .catch(error => console.error('Error:', error));
  }

  return (
    <div className='container1'>
      <form id='form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input 
          type="text"
          value={user.username}
          placeholder='Enter Username'
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          required 
        />
        <input 
          type="password"
          value={user.password}
          placeholder='Enter Password'
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required 
        />
        <div className="signup-link">
          <label>Not signed up?</label>
          <Link to="/signup"> Sign Up</Link>
        </div>
        <button type='submit' id='button'>Login</button>
      </form>
    </div>
  );
}

export default Login;
