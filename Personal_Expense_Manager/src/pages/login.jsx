import React,{useState} from 'react'
import { useNavigate , Link} from 'react-router-dom'

function login() {
  const[user , setUser] = useState({
    username:"",
    password:"",
  })

  
  function Handleclick(){



    fetch('http://localhost:3000/api/login',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user),
    })
    .then((response)=>response.json())
    .then(data => {
      if(data.message){
        alert(data.message)
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
       <input type="password"
      value={user.password}
      placeholder='Enter password'
      onChange={(e) => setUser({...user,["password"]:e.target.value})}
      required 
       />
      
       <button type='submit' onClick={Handleclick}>Login</button>
       <label>Not Signup?</label>
        <Link to="/login">SignUp</Link>
    </div>
  )
}

export default login
