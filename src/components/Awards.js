import React from 'react'
import '../css/Awards.css'
import TitleBlock from './TitleBlock'
import cert from '../images/AgileCertification.PNG'

class Awards extends React.Component {
    render() {
        return (
            <div className='gray-bg'>
                <TitleBlock lineOne='// Awards' lineTwo='Here&apos;s what I&apos;ve trained in' />
                <div className='awards-container'>
                    <div className='awardsImg-container'>
                        <img src={cert} alt='My agile certification' />
                        <p className='awards-caption'>Agile with Atlassian Jira</p>
                    </div>
                    <p className='awards-txt'>For this certification, I had to master best agile practices as well as
                        specific topics relating to Jira. I displayed my proficiency in JQL, Kanban, and Scrum.</p>
                </div>
            </div>
        )
    }
}

export default Awards