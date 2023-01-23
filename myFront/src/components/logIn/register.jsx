import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [data, setdata] = useState({});
     const navigator = useNavigate()

    const handleSubmit = async (event)=>{
        event.preventDefault();        
        await axios.post('http://localhost:3002/api/users',data)
        navigator('/auth')
    }


  return (
    <div>

        <div className='myLogInPage' style={{ backgroundImage: `url(/pics/background2.png)` }}>
          <form className="myLogIn" >
                    <p className="p1">Sign Up</p>
                    <input type="text" className="logInInputs" placeholder="Full Name" onChange={(ev)=>setdata({...data,name:ev.target.value})}/>
                    <input type="email" className="logInInputs" name="email" placeholder="Email" onChange={(ev)=>setdata({...data,email:ev.target.value})}  />
                    <input type="password" className="logInInputs" name="password" placeholder="Password" onChange={(ev)=>setdata({...data,password:ev.target.value})}  /> 
                    <input type="text" className="logInInputs" name="text" placeholder="Who is your favorite teacher?" onChange={(ev)=>setdata({...data,verification_question:ev.target.value})}  /> <br /><br />
                    <button className="btn btn-warning" onClick={(event)=>handleSubmit(event,data)}>Log In</button>
          </form>
   </div>   

    </div>
  )
}
