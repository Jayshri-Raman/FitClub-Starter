import React from 'react';
import './Programs.css';
import RightArrow from '../../assets/rightArrow.png'
import {programsData} from '../../data/programsData'
const Programs = () => {
  return (
    <div className='Programs' id='programs'>
        {/*Header*/}
        <div className='programs-header'>
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape your</span>
        </div>

        <div className='program-categories'>
            {programsData.map((program)=>(
            <div className='category'>
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className='join-now'>
                    <span>Join Now</span>
                    <img src={RightArrow}></img>
                </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Programs
