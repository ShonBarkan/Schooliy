import React from 'react'
import '../MyCourses.css'




export default function MySubject(props) {
    const {mysubject,deleteAcourse}=props

  return (<div className='Mysubject' style={{ backgroundImage: `url(${mysubject.pic})` }}>
    <div className='MysubjectAfterHover' >
        <div className='subMain'>
            <h4>Your course name is:</h4>
            <h4>{mysubject.name}</h4>
            
        </div>
        <div className='subEnd'>
            <button className='delet' onClick={()=>deleteAcourse(mysubject.subjectid)}>
                <span class="shadow"></span>
                <span class="edge"></span>
                <span class="front text"> Leave Course</span>
            </button>
        </div>
    </div>
    <div className='MysubjectBeforeHover'>
        <h1 className='kotert'> {mysubject.name.slice(0,-2)} </h1>
    </div>

  </div>)
}
