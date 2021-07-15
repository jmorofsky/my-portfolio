import React from 'react'
import '../css/Skills.css'
import TitleBlock from './TitleBlock'
import agile from '../images/agile-methodology.png'
import oop from '../images/object-oriented-programming.png'
import dev from '../images/software-development.png'
import teamwork from '../images/teamwork.png'
import design from '../images/ui-ux-design.png'
import version from '../images/version-control.png'

class Skills extends React.Component {
    render() {
        return (
            <div className='bg'>
                <TitleBlock lineOne='// Skills' lineTwo='Here&apos;s what I&apos;m good at' />

                <div className='skills-container'>
                    <div className='skills-item'>
                        <img src={teamwork} alt='Teamwork' className='skills-img' />
                        <p className='skills-txt'>Teamwork</p>
                    </div>
                    <div className='skills-item'>
                        <img src={agile} alt='Agile Methodology' className='skills-img' />
                        <p className='skills-txt'>Agile Methodology</p>
                    </div>
                    <div className='skills-item'>
                        <img src={oop} alt='Object Programming' className='skills-img' />
                        <p className='skills-txt'>Object Programming</p>
                    </div>
                    <div className='skills-item'>
                        <img src={dev} alt='Software Development' className='skills-img' />
                        <p className='skills-txt'>Software Development</p>
                    </div>
                    <div className='skills-item'>
                        <img src={design} alt='UI / UX Design' className='skills-img' />
                        <p className='skills-txt'>UI / UX Design</p>
                    </div>
                    <div className='skills-item'>
                        <img src={version} alt='Version Control' className='skills-img' />
                        <p className='skills-txt'>Version Control</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills