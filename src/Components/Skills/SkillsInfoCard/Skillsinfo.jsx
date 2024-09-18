import React from 'react'
import './SkillsInfo.css';

const Skillsinfo = ({ heading, skills }) => {
    return (
        <div className='skills-info-card'>
            <h6>{heading}</h6>
            <div className='skills-info-content'>
                {skills.map((items, index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <div className='skill-info'>
                            <p>{items.skill}</p>
                            <p className='percentage'>{items.percentage}</p>
                        </div>
                        <div className='skill-progress-bg'>
                            <div className='skill-progress' style={{ width: items.percentage }}></div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Skillsinfo;
