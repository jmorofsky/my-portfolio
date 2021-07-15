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

    handleResize = () => {
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
        let widthStyle2

        if (this.state.windowWidth > 600) {
            widthStyle = this.props.lineOne.length * 4.3

            if (this.props.lineOne.length > this.props.lineTwo.length) {
                widthStyle2 = (this.props.lineTwo.length / 1.2) + widthStyle - 17.5
            } else {
                widthStyle2 = (this.props.lineTwo.length / 1.2) + widthStyle - 27.4
            }
        } else {
                widthStyle2 = this.props.lineTwo.length

                if (this.props.lineOne.length > this.props.lineTwo.length) {
                    widthStyle2 = this.props.lineOne.length + 11.5
                    widthStyle = (this.props.lineOne.length / 4) + widthStyle2 - 0.2
                } else {
                    widthStyle = widthStyle2 + (this.props.lineOne.length / 50) + 2.5
                }
        }

        const bigStyle = {
            backgroundColor: '#000',
            width: widthStyle + 'ch',
            paddingLeft: 15 + 'px',
            paddingRight: 10 + 'px',
            transition: 'all .7s ease-in-out'
        }

        const lineTwoBigStyle = {
            width: widthStyle2 + 'ch',
            paddingLeft: 15 + 'px',
            paddingRight: 15 + 'px',
            transition: 'all .7s ease-in-out'
        }

        const smallStyle = {
            backgroundColor: '#000',
            width: widthStyle + 'ch',
            paddingLeft: 15 + 'px',
            paddingRight: 10 + 'px',
            transition: 'all .7s ease-in-out'
        }

        const lineTwoSmallStyle = {
            backgroundColor: '#000',
            width: widthStyle2 + 'ch',
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