import React, { useEffect, useState } from 'react'
import NavBar from './navBar/navBar'
import { Routes, useNavigate } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Register from './logIn/register'
import LogIn from './logIn/logIn'
import MyCourses from './myCourses/MyCourses'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import AllSubjects from './AllSubjects/allSubjects'
import './main.css'
import ForgotPassword from './logIn/forgotPassword'

export default function Main() {
  const [allSubjects, setAllSubjects] = useState([])
  const navigator = useNavigate()

  useEffect(()=>{getSubjects()},[])
  
  async function getSubjects(){
    const {data} = await axios.get('http://localhost:3002/api/subjects');
    setAllSubjects(data) ;
  }
  async function addNewCourse(subjectname,subjectid,pic){
    const token=localStorage.getItem('token')
    if(!token){
      document.getElementById('BTNtext'+ subjectid).innerHTML= 'Going to Log In'
      setTimeout(() => {return  navigator('/auth')}, 1500);
      }
    var decoded = jwt_decode(token);
    const {data}=await axios.post('http://localhost:3002/api/courses',{subjectname:subjectname, subjectid:subjectid, usersid:decoded.usersid,pic:pic},{headers: {'x-auth-token': `${token}`}});
    data=='user alredy lerning this subject'?document.getElementById('BTNtext'+ subjectid).innerHTML= 'You are already registered' :document.getElementById('BTNtext'+ subjectid).innerHTML= 'Your request has been sent'
    data=='user alredy lerning this subject'?document.getElementById('BTNtext'+ subjectid).style.color= 'red' :document.getElementById('BTNtext'+ subjectid).style.color= 'green'
  }
  const handleSubmit = async (event,data)=>{
    event.preventDefault();        
    const result = await axios.post('http://localhost:3002/api/auth',data)
    localStorage.setItem('token',result.data)
    navigator('/MyCourses')
}


    return (
    <div>
    <NavBar/>
    <Routes> 
        <Route path="/register"  element ={ <Register/>} />         
        <Route path="/auth"  element ={ <LogIn handleSubmit={(event,data)=>handleSubmit(event,data)} />} />  
        <Route path="/MyCourses"  element ={ <MyCourses/>} />  
        <Route path="/"  element ={ <AllSubjects allSubjects={allSubjects}  addNewCourse={(sbjectname,subjectid,pic)=>addNewCourse(sbjectname,subjectid,pic)}  />} />  
        <Route path="/ForgotPassword"  element ={ <ForgotPassword />} />  

    </Routes>     

    </div>
  )
}
