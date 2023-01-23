import React from 'react'
import './allSubjects.css'
import Subject from './subject'


export default function AllSubjects(props) {
  const {allSubjects,addNewCourse} = props

  return (<div className='bigPageSubjects'>
    <img className='bigLogo' src="/pics/logo3.png" alt="" />
    <div style={{ backgroundImage: `url(/pics/background.png)` }}>
    <h1 className='head'>All Courses</h1>
    {/* <p className='introduction'>Here you can see all our worthwhile courses, read about them and of course apply, so what are you waiting for</p> */}
    <p className='introduction'>Here you can see all our worthwhile courses, read about them and of course apply</p>
    <p className='introduction'>So what are you waiting for</p>
    <div className='subjectsPage'>

        {allSubjects.map((subject,index)=>
           <Subject key={index} index={index} subject={subject} addNewCourse={(sbjectname,subjectid,pic)=>addNewCourse(sbjectname,subjectid,pic)}></Subject>
          )}

    </div>
  </div>
  </div>)
}
