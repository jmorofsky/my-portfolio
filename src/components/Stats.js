import React from 'react'
import '../css/Stats.css'
import TitleBlock from "./TitleBlock"
import refreshArrow from '../images/refreshArrow.png'
import handleViewport from "react-in-viewport"

class Statistics extends React.Component {
    constructor() {
        super()
        this.state = {
            stats: [],
            randomStats: [],
            isLoading: false,
            waiting: true,
            played: false
        }

        this.displayStats = this.displayStats.bind(this)
        this.countUp = this.countUp.bind(this)
        this.handleClick = this.handleClick.bind(this)

        fetch("https://www.googleapis.com/storage/v1/b/jasonmorofsky/o/statsData.json")
            .then(res => res.json())
            .then(
                (result) => {
                    let url = result.mediaLink

                    fetch(url)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                setTimeout(() => this.setState({
                                    stats: result.stats, randomStats: result.stats, waiting: false
                                }), 1800)
                            }
                        )
                }
            )
    }

    displayStats() {
        this.setState({ isLoading: true })
        let stats_array = []
        let selected
        let items = this.state.stats
        let copy = []
        for (let i = 0; i < items.length - 1; i++)
            items[i].shown = 0

        for (let i = 0; i < 4; i++) {
            selected = false
            while (selected === false) {
                let id = Math.floor(Math.random() * 8)
                if (items[id].shown === 0) {
                    stats_array[i] = items[id]
                    items[id].shown = 1
                    selected = true
                }
            }
        }
        copy = JSON.parse(JSON.stringify(stats_array))
        for (let i = 0; i < 4; i++) {
            copy[i].value = 0
        }
        this.setState({ randomStats: copy })
        setTimeout(() => { this.setState({ randomStats: stats_array }) }, 300)
    }

    countUp() {
        let maxVals = []
        for (let i = 0; i < 4; i++) {
            maxVals[i] = JSON.parse(JSON.stringify(this.state.randomStats[i].value))
        }

        let items = this.state.randomStats
        for (let i = 0; i < 4; i++) {
            items[i].value = 0
        }

        for (let i = 0; i < 4; i++) {
            let interval = setInterval(() => {
                switch (true) {
                    case (maxVals[i] <= 50):
                        if (items[i].value < maxVals[i]) {
                            items[i].value += 1
                        } else {
                            items[i].value = maxVals[i]
                        }

                        if (items[0].value === maxVals[0] && items[1].value === maxVals[1]
                            && items[2].value === maxVals[2] && items[3].value === maxVals[3]) {
                            this.setState({ isLoading: false })
                            clearInterval(interval)
                        }
                        this.setState({ randomStats: items })
                        break

                    case (maxVals[i] <= 10000):
                        if (items[i].value < maxVals[i]) {
                            items[i].value += 51
                        } else {
                            items[i].value = maxVals[i]
                        }

                        if (items[0].value === maxVals[0] && items[1].value === maxVals[1]
                            && items[2].value === maxVals[2] && items[3].value === maxVals[3]) {
                            this.setState({ isLoading: false })
                            clearInterval(interval)
                        }
                        this.setState({ randomStats: items })
                        break

                    case (maxVals[i] <= 50000):
                        if (items[i].value < maxVals[i]) {
                            items[i].value += 398
                        } else {
                            items[i].value = maxVals[i]
                        }

                        if (items[0].value === maxVals[0] && items[1].value === maxVals[1]
                            && items[2].value === maxVals[2] && items[3].value === maxVals[3]) {
                            this.setState({ isLoading: false })
                            clearInterval(interval)
                        }
                        this.setState({ randomStats: items })
                        break

                    default:
                        if (items[i].value < maxVals[i]) {
                            items[i].value += 797
                        } else {
                            items[i].value = maxVals[i]
                        }

                        if (items[0].value === maxVals[0] && items[1].value === maxVals[1]
                            && items[2].value === maxVals[2] && items[3].value === maxVals[3]) {
                            this.setState({ isLoading: false })
                            clearInterval(interval)
                        }
                        this.setState({ randomStats: items })
                }
            }, 20)
        }
    }

    handleClick() {
        if (this.state.isLoading === false) {
            setTimeout(() => this.displayStats(), 1)
            setTimeout(() => this.countUp(), 305)
        }
    }

    render() {
        if (this.state.waiting === true) {
            return (
                <div className='gray-bg'>
                    <div className='stats-header'>
                        <TitleBlock lineOne='// Stats' lineTwo='Who doesn&apos;t like numbers' />

                        <img
                            src={refreshArrow}
                            alt='Get random stats'
                            className='refreshArrowLoading'
                            title='Get random stats'
                        />
                    </div>
                </div>
            )
        }

        setTimeout(() => {
            if (this.props.inViewport && this.props.enterCount === 1 && this.state.played === false) {
                this.handleClick()
                this.setState({ played: true })
            }
        }, 1)

        return (
            <div className='gray-bg'>
                <div className='stats-header'>
                    <TitleBlock lineOne='// Stats' lineTwo='Who doesn&apos;t like numbers' />

                    <img
                        src={refreshArrow}
                        alt='Get random stats'
                        className='refreshArrow'
                        title='Get random stats'
                        onClick={() => this.handleClick()}
                    />
                </div>

                <div className='stats-container'>
                    <li className='statsItem'>
                        <h2 className='bigNum'>{this.state.randomStats[0].value}</h2>
                        <h2 className='statsTxt'>{this.state.randomStats[0].name}</h2>
                    </li>
                    <li className='statsItem'>
                        <h2 className='bigNum'>{this.state.randomStats[1].value}</h2>
                        <h2 className='statsTxt'>{this.state.randomStats[1].name}</h2>
                    </li>
                </div>
                <div className='stats-container'>
                    <div className='statsItem'>
                        <h2 className='bigNum'>{this.state.randomStats[2].value}</h2>
                        <h2 className='statsTxt'>{this.state.randomStats[2].name}</h2>
                    </div>
                    <div className='statsItem'>
                        <h2 className='bigNum'>{this.state.randomStats[3].value}</h2>
                        <h2 className='statsTxt'>{this.state.randomStats[3].name}</h2>
                    </div>
                </div>

                <p className='stats-footer'><em>
                    The above data is updated automatically every day. Last update: {this.state.stats[8].value} ET
                </em></p>
            </div>
        )
    }
}

const Stats = handleViewport(Statistics)

export default Stats