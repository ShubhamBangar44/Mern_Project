import React,{useState} from 'react'
import { useNavigate , Link} from 'react-router-dom'

function signup() {
  const[user , setUser] = useState({
    username:"",
    email:"",
    password:"",
    confirmpassword:""
  })
  const navigate = useNavigate();
  function Handleclick(){

    if(user.password !== user.confirmpassword){
      alert("Confirm Password Don't Match")
      return;
    }
    if(user.password.length < 8){
      alert("Password To Small")
      return;
    }

    const {confirmpassword,...userData} =user;

    fetch('http://localhost:3000/api/signup',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user),
    })
    .then((response)=>response.json())
    .then(data => {
      if (data.message === "Signup successful") {
          localStorage.setItem("user", JSON.stringify(data.user)); // Store user in localStorage
          navigate('/'); // Redirect to home
      } else {
          alert(data.message); // Show error message
      }
  })
  .catch(error => console.error('Error:', error));
}
    
  return (
    <div>
      <input type="username"
      value={user.username}
      placeholder='Enter Username'
      onChange={(e) => setUser({...user,["username"]:e.target.value})}
      required 
       />
       <input type="email"
      value={user.email}
      placeholder='Enter email'
      onChange={(e) => setUser({...user,["email"]:e.target.value})}
      required 
       />
       <input type="password"
      value={user.password}
      placeholder='Enter password'
      onChange={(e) => setUser({...user,["password"]:e.target.value})}
      required 
       />
       <input type="password"
      value={user.confirmpassword}
      placeholder='Confirm password'
      onChange={(e) => setUser({...user,["confirmpassword"]:e.target.value})}
      required 
       />
       <button type='submit' onClick={Handleclick}>Signup</button>
       <label>Already Signup?</label>
       <Link to="/login">Login</Link>
    </div>
  )
}

export default signup
