import React from "react"
import '../css/TitleBlock.css'
import handleViewport from "react-in-viewport"

class Block extends React.Component {
    render() {
        const width = this.props.lineOne.length
        let widthStyle
        this.props.lineOne.length > this.props.lineTwo.length ?
            widthStyle = this.props.lineOne.length : widthStyle = this.props.lineTwo.length - 14

        if (this.props.inViewport && this.props.enterCount === 1) {
            return (
                <div ref={this.props.forwardedRef}>
                    <div className='titleBlock'>
                        <div style={{
                            backgroundColor: '#000',
                            width: widthStyle * 30,
                            paddingLeft: 15 + 'px',
                            paddingRight: 10 + 'px'
                        }}>
                            <h1 className='typing-effect-title'
                                style={{
                                    width: width + 'ch'
                                }}>{this.props.lineOne}</h1>
                        </div>
                        <h2 className='lineTwo' style={{
                            width: widthStyle * 30 - 5,
                            paddingLeft: 15 + 'px',
                            paddingRight: 15 + 'px'
                        }}>{this.props.lineTwo}</h2>
                    </div>
                </div>
            )
        } return (
            <div ref={this.props.forwardedRef}>
                <div className='titleBlock'>
                    <div style={{
                        backgroundColor: '#000',
                        width: widthStyle * 30,
                        paddingLeft: 15 + 'px',
                        paddingRight: 10 + 'px'
                    }}>
                        <h1 className='typing-effect-title-static' style={{
                            width: width + 'ch'
                        }}>{this.props.lineOne}</h1>
                    </div>
                    <h2 className='lineTwo' style={{
                        width: widthStyle * 30 - 5,
                        paddingLeft: 15 + 'px',
                        paddingRight: 15 + 'px'
                    }}>{this.props.lineTwo}</h2>
                </div>
            </div>
        )
    }
}

const TitleBlock = handleViewport(Block)

export default TitleBlock