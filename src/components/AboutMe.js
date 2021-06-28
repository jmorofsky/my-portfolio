import React from "react"
import '../css/AboutMe.css'
import TitleBlock from "./TitleBlock"
import fpu from '../images/fpu.png'

class AboutMe extends React.Component {
    render() {
        return (
            <div className="bg" id="about-me">
                <TitleBlock lineOne='// About Me' lineTwo='I ♥ code!' />
                <div className="about-me-container">
                    <img src={fpu} alt='FPU main building' className='fpu' />
                    <div className='pgh-container'>
                        <p className='about-p'>&emsp; Hi, I’m Jason Morofsky, a Computer Science graduate
                            from <a href='https://floridapoly.edu/'>Florida Polytechnic University.</a> I love all
                            things technology, especially if it has to do with software development and
                            programming.</p>
                        <p className='about-p'>&emsp; That being said, front-end development is my passion. I love
                            being able to express my creativity through sleek, efficient, and beautiful user
                            experience design.</p>
                        <p className='about-p'>&emsp; With my experience in React, Node, and RESTful APIs as well
                            as knowledge of agile methodology and workflow management tools like Jira, I know I
                            will be an asset to the front-end of any application.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe