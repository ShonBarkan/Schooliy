import React from 'react'
import './allSubjects.css'



export default function Subject(props) {
    const {index,subject,addNewCourse}=props

    const style1={
        backgroundColor: 'white',
        color: 'black',

    }
    const style2={
        backgroundColor: 'black',
        color: 'white',
    }

  return (<div className='subject' style={index%2==0? style1 :style2} >
    <div className='subjectAfterHover' >
        <div className='subMain'>
            <div className='MainTop'>
                <p>level: {subject.level}</p>
                <p>rating: {subject.rating}/10 &#11088;</p>
            </div>
            <p className='aboutSub'>{subject.description}</p>
        </div>
        <div className='subEnd'>
        <button id={'applyBTN'+subject.subjectid} class="icon-btn add-btn" onClick={()=>addNewCourse(subject.subjectname,subject.subjectid,subject.pics)}>
            <div className="add-icon"></div>
            <div className="btn-txt" id={'BTNtext'+ subject.subjectid}>apply</div>
        </button>
    </div>
    </div>
    <div className='subjectBeforeHover'>
        <img className='pics' src={subject.pics} alt="" />
        <h1 className='kotert'> {subject.subjectname} </h1>
    </div>

  </div>)
}
// style={{ backgroundImage: `url(${subject.pics})` }}