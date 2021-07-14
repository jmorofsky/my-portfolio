import React from "react"
import '../css/TitleBlock.css'
import handleViewport from "react-in-viewport"

class Block extends React.Component {
    constructor() {
        super()
        this.state = {
            windowWidth: window.innerWidth,
        }

        this.handleResize = this.handleResize.bind(this)
    }

    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth })
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize)
    }

    render() {
        const width = this.props.lineOne.length
        let widthStyle
        let lineOneStyle
        let lineTwoStyle

        if (this.state.windowWidth > 600) {
            this.props.lineOne.length > this.props.lineTwo.length ?
                widthStyle = this.props.lineOne.length : widthStyle = this.props.lineTwo.length - 16
        } else {
            this.props.lineOne.length > this.props.lineTwo.length ?
                widthStyle = this.props.lineOne.length : widthStyle = this.props.lineTwo.length - 12.9
        }

        const bigStyle = {
            backgroundColor: '#000',
            width: widthStyle * 37,
            paddingLeft: 15 + 'px',
            paddingRight: 10 + 'px',
            transition: 'all .7s ease-in-out'
        }

        const lineTwoBigStyle = {
            width: widthStyle * 37 - 5,
            paddingLeft: 15 + 'px',
            paddingRight: 15 + 'px',
            transition: 'all .7s ease-in-out'
        }

        const smallStyle = {
            backgroundColor: '#000',
            width: widthStyle * 21,
            paddingLeft: 15 + 'px',
            paddingRight: 10 + 'px',
            transition: 'all .7s ease-in-out'
        }

        const lineTwoSmallStyle = {
            backgroundColor: '#000',
            width: widthStyle * 21,
            paddingLeft: 15 + 'px',
            paddingRight: 10 + 'px',
            transition: 'all .7s ease-in-out'
        }

        if (this.state.windowWidth > 600) {
            lineOneStyle = bigStyle
            lineTwoStyle = lineTwoBigStyle
        } else {
            lineOneStyle = smallStyle
            lineTwoStyle = lineTwoSmallStyle
        }

        if (this.props.inViewport && this.props.enterCount === 1) {
            return (
                <div ref={this.props.forwardedRef}>
                    <div className='titleBlock'>
                        <div style={lineOneStyle}>
                            <h1 className='typing-effect-title'
                                style={{
                                    width: width + 'ch'
                                }}>{this.props.lineOne}</h1>
                        </div>
                        <h2 className='lineTwo' style={lineTwoStyle}>{this.props.lineTwo}</h2>
                    </div>
                </div>
            )
        } return (
            <div ref={this.props.forwardedRef}>
                <div className='titleBlock'>
                    <div style={lineOneStyle}>
                        <h1 className='typing-effect-title-static' style={{
                            width: width + 'ch'
                        }}>{this.props.lineOne}</h1>
                    </div>
                    <h2 className='lineTwo' style={lineTwoStyle}>{this.props.lineTwo}</h2>
                </div>
            </div>
        )
    }
}

const TitleBlock = handleViewport(Block)

export default TitleBlock