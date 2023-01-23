import React, { useEffect, useState } from 'react'
import './MyCourses.css'
import MySubject from './Mysubject/Mysubject'
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function MyCourses(props) {
  const navigator = useNavigate()


  const [myCourses, setMyCourses] = useState([])
  const [decoded, setDecoded] = useState({})

  useEffect(()=>{getMyCourses()},[])

  async function getMyCourses(){
    const token=localStorage.getItem('token')
    let decoded=jwt_decode(token)
    setDecoded(decoded);
    console.log(decoded);
    const {data} = await axios.get(`http://localhost:3002/api/courses/${decoded.usersid}`);
    console.log(data);
    setMyCourses(data)
  }
  async function deleteAcourse(subjectid){
    const token=localStorage.getItem('token')
    var decoded = jwt_decode(token);
    console.log(subjectid);
    console.log(decoded.usersid);
    await axios.delete('http://localhost:3002/api/courses',{ data: {subjectid:subjectid, usersid:decoded.usersid} ,headers: {'x-auth-token': `${token}`}});
    getMyCourses();
  }

  return (<div className='bigPageMyCourses' style={{ backgroundImage: `url(/pics/background.png)` }}>
    <h1 className='head'>Hi {decoded.name}</h1>
    <p className='introduction'>Here you can see all your courses, Learn more about them and Cancel the application</p>
    <div className='MysubjectsPage'>

        {myCourses.map(mysubject=>
           <MySubject key={mysubject.subjectid} mysubject={mysubject} deleteAcourse={(subjectid)=>deleteAcourse(subjectid)}></MySubject>
        )}

    </div>
    {myCourses.length===0? <div className='noCourse'><h1>It seems that you havent registered for any course yet</h1><button className='toAllCourses' onClick={()=>navigator('/')}>To See All Courses</button></div>:''}

  </div>)
}
