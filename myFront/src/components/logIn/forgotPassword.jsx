import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
    const [data, setdata] = useState({});
     const navigator = useNavigate()

    const handleSubmit = async (event)=>{
        event.preventDefault();        
        let result=await axios.put('http://localhost:3002/api/users',data)
        console.log(result.data);
        if(result.data=='Incorrect answer, try again'){
            return document.getElementById('ForgotPasswordBTN').innerHTML= 'Incorrect answer, Try again'
        }
        document.getElementById('ForgotPasswordBTN').innerHTML= 'Password changed successfully'
        setTimeout(() => {return  navigator('/auth')}, 1500);
    }


  return (
    <div>

        <div className='myLogInPage' style={{ backgroundImage: `url(/pics/background2.png)` }}>
          <form className="myLogIn" >
                    <p className="p1">Forgot Password</p>
                    <input type="email" className="logInInputs" name="email" placeholder="Email" onChange={(ev)=>setdata({...data,email:ev.target.value})}  />
                    <input type="text" className="logInInputs" name="text" placeholder="Who is your favorite teacher?" onChange={(ev)=>setdata({...data,verification_question:ev.target.value})}  />
                    <input type="password" className="logInInputs" name="password" placeholder="New Password" onChange={(ev)=>setdata({...data,password:ev.target.value})}  />  <br /><br />
                    <button className="btn btn-warning" id='ForgotPasswordBTN' onClick={(event)=>handleSubmit(event,data)}>Log In</button>
          </form>
   </div>   

    </div>
  )
}
