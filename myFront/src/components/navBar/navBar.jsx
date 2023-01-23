import React from 'react'
import { useNavigate } from 'react-router-dom'
import './navBar.css'
import jwt_decode from "jwt-decode";
import { useEffect } from 'react';



export default function NavBar() {
  const navigate=useNavigate();

  let token='no'
  if(localStorage.getItem('token')){
     token=localStorage.getItem('token')
  }


  return (<div className='bar'>
      <div className='myNavBar' > 
              <img className='smallLogo ' src="/pics/logo4.png" alt="" />
              <a id='AllSubjects' className='navLinks' href="/">All Subjects</a>
              {token=='no'? <a id='auth' className='navLinks' href="/auth">login</a>: <a id='myCourses' className='navLinks' href="/myCourses">My Courses</a>}
              {token=='no'? <a id='register' className='navLinks' href="/register">signup</a> 
                : 
                <button id='logOut' onClick={()=>{
                  localStorage.removeItem('token');
                  navigate('/auth')
                  }}>
                  LogOut
                </button>
              }
            </div>
</div>)
}
