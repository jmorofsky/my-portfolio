import React from "react"
import '../css/Header.css'
import email from '../images/email.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import arrow from '../images/arrow.png'
import emailPreview from '../images/emailPreview.png'
import githubPreview from '../images/githubPreview.png'
import linkedinPreview from '../images/linkedinPreview.PNG'

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            isEmailHovering: false,
            isGithubHovering: false,
            isLinkedinHovering: false
        }

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver(event) {
        const { id } = event.target

        if (id === '1') {
            this.setState(() => ({
                isEmailHovering: true
            }))
        }

        if (id === '2') {
            this.setState(() => ({
                isGithubHovering: true
            }))
        }

        if (id === '3') {
            this.setState(() => ({
                isLinkedinHovering: true
            }))
        }
    }

    handleMouseOut(event) {
        const { id } = event.target

        if (id === '1') {
            this.setState(() => ({
                isEmailHovering: false
            }))
        }

        if (id === '2') {
            this.setState(() => ({
                isGithubHovering: false
            }))
        }

        if (id === '3') {
            this.setState(() => ({
                isLinkedinHovering: false
            }))
        }
    }

    render() {
        return (
            <header>
                <div className="wrapper">
                    <h1 className="typing-effect">Hi, I'm Jason</h1>
                </div>
                <div className="wrapper">
                    <h2 className="typing-effect-small">Computer Scientist</h2>
                </div>

                {this.state.isEmailHovering ? (<img src={emailPreview}
                    alt='preview'
                    className='preview'
                />) : null}
                {this.state.isGithubHovering ? (<img
                    src={githubPreview}
                    alt='preview'
                    className='preview'
                />) : null}
                {this.state.isLinkedinHovering ? (<img
                    src={linkedinPreview}
                    alt='preview'
                    className='preview'
                />) : null}
                
                <ul className='header-ul'>
                    <li className='header-li'>
                        <a href="mailto:contact@jasonmorofsky.com" title='Email Me'>
                            <img
                                src={email}
                                alt="Email me"
                                className='contact-buttons'
                                onMouseOver={this.handleMouseOver}
                                onMouseOut={this.handleMouseOut}
                                id='1'
                            /></a>
                    </li>
                    <li className='header-li'>
                        <a href="https://github.com/jmorofsky" title='My GitHub Profile'>
                            <img
                                src={github}
                                alt="My GitHub Profile"
                                className='contact-buttons'
                                onMouseOver={this.handleMouseOver}
                                onMouseOut={this.handleMouseOut}
                                id='2'
                            /></a>
                    </li>
                    <li className='header-li'>
                        <a href="http://www.linkedin.com/in/jason-morofsky" title='My LinkedIn Profile'>
                            <img
                                src={linkedin}
                                alt="My LinkedIn profile"
                                className='linkedIn'
                                onMouseOver={this.handleMouseOver}
                                onMouseOut={this.handleMouseOut}
                                id='3'
                            /></a>
                    </li>
                </ul>

                <a href="#about-me"><img src={arrow} alt="Go to about section" className="arrow" /></a>
            </header>
        )
    }
}

export default Header