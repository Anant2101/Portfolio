import React, { useState } from 'react'
import './Skills.css'
import SkillCard from './SkillCard/SkillCard'
import { SKILLS } from "../../Utils/Data"
import Skillsinfo from './SkillsInfoCard/Skillsinfo'

const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectedSkill = (data) => {
        setSelectedSkill(data);
    }

    return (
        <section className='skills-container'>
            <h5>Technical Prificiency</h5>

            <div className='skills-content'>
                <div className='skills'>
                    {SKILLS.map((item) => (
                        <SkillCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={() => {
                                handleSelectedSkill(item)
                            }}
                        />
                    ))}
                </div>
                <div className='skills-info'>
                    <Skillsinfo
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </div>
            </div>
        </section>
    )
}

export default Skills
