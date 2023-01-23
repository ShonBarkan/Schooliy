import React from 'react'
import {useState} from 'react'
import './logIn.css'


export default function LogIN(props) {
    const {handleSubmit}=props
    const [data, setdata] = useState({});


 return (
   <div className='myLogInPage' style={{ backgroundImage: `url(/pics/background2.png)` }}>
      <form className="myLogIn" action="">
                <p className="p1">Log In</p> <br /><br />
                <input type="email" className="logInInputs" name="email" placeholder="Email" onChange={(ev)=>setdata({...data,email:ev.target.value})}  />
                <input type="password" className="logInInputs" name="password" placeholder="Password" onChange={(ev)=>setdata({...data,password:ev.target.value})}  /> <br /><br /><br />
                <button className="btn btn-warning" onClick={(event)=>handleSubmit(event,data)}>Log In</button>
                <br />
                <a className='toSignUp' href="/ForgotPassword"> Forgot Password? click here</a>
                <a className='toSignUp' href="/register"> Not registered yet? Sign up now</a>
      </form>
   </div>   
  )
}
