import React from "react"
import '../css/AboutMe.css'
import TitleBlock from "./TitleBlock"

class AboutMe extends React.Component {
    render() {
        return (
            <div className="bg" id="about-me">
                <TitleBlock />
            </div>
        )
    }
}

export default AboutMe