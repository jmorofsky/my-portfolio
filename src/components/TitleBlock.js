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
            if(this.props.lineTwo.length === 9) {
                widthStyle = 46.5
                widthStyle2 = 36.63
            }

            if(this.props.lineTwo.length === 23) {
                widthStyle = 38
                widthStyle2 = 29.9
            }

            if(this.props.lineTwo.length === 24) {
                widthStyle = 34
                widthStyle2 = 26.7
            }

            if(this.props.lineTwo.length === 27) {
                widthStyle = 38
                widthStyle2 = 29.89
            }
        } else {
                if(this.props.lineTwo.length === 9) {
                    widthStyle = 25
                    widthStyle2 = 22.5
                }

                if(this.props.lineTwo.length === 23) {
                    widthStyle = 25.6
                    widthStyle2 = 23
                }

                if(this.props.lineTwo.length === 24) {
                    widthStyle = 26.7
                    widthStyle2 = 24
                }

                if(this.props.lineTwo.length === 27) {
                    widthStyle = 30
                    widthStyle2 = 27
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