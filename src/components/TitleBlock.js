import React from "react"
import '../css/TitleBlock.css'
import handleViewport from "react-in-viewport"

class Block extends React.Component {
    constructor() {
        super()
        this.state = {
            windowWidth: window.innerWidth,
            played: false
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
        const width2 = this.props.lineTwo.length

        if (this.state.windowWidth > 600) {
            if (this.props.inViewport && this.props.enterCount === 1 && this.state.played === false) {
                return (
                    <div ref={this.props.forwardedRef}>
                        <div className='titleBlock' style={{
                            width: (width * 4.5) + 'ch'
                        }}>
                            <div>
                                <h1 className='typing-effect-title'
                                    style={{
                                        width: width + 'ch'
                                    }}>{this.props.lineOne}</h1>
                            </div>
                            <h2 className='lineTwo'>{this.props.lineTwo}</h2>
                        </div>
                        <div className='logic'>{setTimeout(() => this.setState({ played: true }), 1000)}</div>
                    </div>
                )
            } return (
                <div ref={this.props.forwardedRef}>
                    <div className='titleBlock' style={{
                        width: (width * 4.5) + 'ch'
                    }}>
                        <div>
                            <h1 className='typing-effect-title-static' style={{
                                width: width + 'ch'
                            }}>{this.props.lineOne}</h1>
                        </div>
                        <h2 className='lineTwo'>{this.props.lineTwo}</h2>
                    </div>
                </div>
            )
        } else {
            if (this.props.inViewport && this.props.enterCount === 1 && this.state.played === false) {
                return (
                    <div ref={this.props.forwardedRef}>
                        <div className='titleBlock' style={{
                            width: (width2 * 1.2) + 'ch'
                        }}>
                            <div>
                                <h1 className='typing-effect-title'
                                    style={{
                                        width: width + 'ch'
                                    }}>{this.props.lineOne}</h1>
                            </div>
                            <h2 className='lineTwo'>{this.props.lineTwo}</h2>
                        </div>
                        <div className='logic'>{setTimeout(() => this.setState({ played: true }), 1000)}</div>
                    </div>
                )
            } return (
                <div ref={this.props.forwardedRef}>
                    <div className='titleBlock' style={{
                        width: (width2 * 1.2) + 'ch'
                    }}>
                        <div>
                            <h1 className='typing-effect-title-static' style={{
                                width: width + 'ch'
                            }}>{this.props.lineOne}</h1>
                        </div>
                        <h2 className='lineTwo'>{this.props.lineTwo}</h2>
                    </div>
                </div>
            )
        }
    }
}

const TitleBlock = handleViewport(Block)

export default TitleBlock