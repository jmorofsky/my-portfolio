import React from "react"
import '../css/TitleBlock.css'
import handleViewport from "react-in-viewport"

class Block extends React.Component {
    render() {
        const width = this.props.lineOne.length

        if (this.props.inViewport && this.props.enterCount === 1) {
            return (
                <div ref={this.props.forwardedRef}>
                    <div className='titleBlock'>
                        <div style={{ backgroundColor: '#000', width: width * 30 }}>
                            <h1 className='typing-effect-title'>{this.props.lineOne}</h1>
                        </div>
                        <h2 className='lineTwo' style={{ width: width * 30 - 5 }}>{this.props.lineTwo}</h2>
                    </div>
                </div>
            )
        } return (
            <div ref={this.props.forwardedRef}>
                <div className='titleBlock'>
                    <div style={{ backgroundColor: '#000', width: width * 30 }}>
                        <h1 className='typing-effect-title-static'>{this.props.lineOne}</h1>
                    </div>
                    <h2 className='lineTwo' style={{ width: width * 30 - 5 }}>{this.props.lineTwo}</h2>
                </div>
            </div>
        )
    }
}

const TitleBlock = handleViewport(Block)

export default TitleBlock