/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"
import '../css/TitleBlock.css'

class TitleBlock extends React.Component {
    render() {
        return (
            <div>
                <div className=''>
                    <h1 className='typing-effect-title'>// About Me</h1>
                </div>
                <h2>I ♥ code!</h2>
            </div>
        )
    }
}

export default TitleBlock