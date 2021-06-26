import React from "react"
import '../css/Header.css'
import email from '../images/email.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import arrow from '../images/arrow.png'

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="wrapper">
                    <h1 className="typing-effect">Hi, I'm Jason</h1>
                </div>
                <div className="wrapper">
                    <h2 className="typing-effect-small">Front-end Developer</h2>
                </div>

                <ul>
                    <li>
                        <a href="mailto:contact@jasonmorofsky.com">
                            <img src={email} alt="Email me"/></a>
                    </li>
                    <li>
                        <a href="https://github.com/jmorofsky">
                            <img src={github} alt="My Github account"/></a>
                    </li>
                    <li>
                        <a href="http://www.linkedin.com/in/jason-morofsky">
                            <img src={linkedin} alt="My LinkedIn profile"/></a>
                    </li>
                </ul>

                <a href="#about-me"><img src={arrow} alt="Go to about section" className="arrow"/></a>
            </header>
        )
    }
}

export default Header