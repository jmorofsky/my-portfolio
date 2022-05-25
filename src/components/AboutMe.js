import React from "react"
import '../css/AboutMe.css'
import TitleBlock from "./TitleBlock"
import fpu from '../images/fpu.png'
import { Parallax } from 'react-parallax'

class AboutMe extends React.Component {
    render() {
        return (
            <div className="bg" id="about-me">
                <TitleBlock lineOne='// About Me' lineTwo='I ♥ code!             ' />
                <div className="about-me-container">
                    <Parallax strength={150} bgImage={fpu} className='fpu'>
                        <div className='parallax'></div>
                    </Parallax>
                    <div className='txt-container'>
                        <p className='about-p'>&emsp; Hi, I’m Jason Morofsky! I love all
                            things technology, ranging from video games and VR, to programming, to
                            computer hardware.</p>
                        <p className='about-p'>&emsp; I graduated in 2021 with a B.S. in Computer Science.
                            I have worked as a quality assurance engineer and have experience with software
                            development.</p>
                        <p className='about-p'>&emsp; I have an attention to detail, and love to express my
                            creativity through both finding clever solutions to problems and beautiful,
                            functional design. Check out this other website I created: 
                            <a href="https://meghanexplainsmedicare.com">Medicare with Meghan Morofsky
                            </a>.
                        </p>
                    </div>
                </div>
                <div className="history-container">
                    <div className="history-item">
                        <p className="history-header">Education</p>
                        <p className="date">MAY 2021</p>
                        <p className="subtext"><strong>FLORIDA POLYTECHNIC UNIVERSITY</strong></p>
                        <p className="subtext2" style={{ marginBottom: "25px" }}>
                            B.S. Computer Science: Cybersecurity</p>

                        <p className="date">MAY 2017</p>
                        <p className="subtext"><strong>CORAL GLADES HIGH SCHOOL</strong></p>
                        <p className="subtext2">High School Diploma</p>
                    </div>
                    <div className="history-item">
                        <p className="history-header">Employment</p>
                        <p className="date">September 2021-Present</p>
                        <p className="subtext"><strong>AIRFIND</strong></p>
                        <p className="subtext2">Quality Assurance Engineer</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe

//update skills section
// add tools section Heres what ive worked with
//replace fpu pic w headshot