import React from 'react'
import '../css/Awards.css'
import TitleBlock from './TitleBlock'
import cert from '../images/AgileCertification.PNG'
import cert2 from '../images/PostmanCertification.png'

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
                    <p className='awards-txt'>For this certifcate, I had to master best agile practices as well as
                        specific topics relating to Jira. I displayed my proficiency in JQL, Kanban, and Scrum.</p>
                </div>

                <div className='awards-container'>
                    <div className='awardsImg-container'>
                        <img src={cert2} alt='My agile certification' />
                        <p className='awards-caption'>Postman: The Complete Guide</p>
                    </div>
                    <p className='awards-txt'>For this certifcate, utilizing Postman, I:
                        <ul>
                            <li className='list'>
                                Created GET, POST, PUT, and DELETE requests
                            </li>
                            <li className='list'>
                                Demonstrated my understanding of GET vs POST request methods
                            </li>
                            <li className='list'>
                                Worked with real-world APIs (Github API, Trello API)
                            </li>
                            <li className='list'>
                                Wrote API tests
                            </li>
                            <li className='list'>
                                Used Postman variables to create workflows and scenarios
                            </li>
                            <li className='list'>
                                Used OAuth2, API keys, tokens, JWT, and basic auth
                            </li>
                            <li className='list'>
                                Collaborated using team workspaces
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        )
    }
}

export default Awards