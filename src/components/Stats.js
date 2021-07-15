import React from 'react'
import '../css/Stats.css'
import TitleBlock from "./TitleBlock"
import refreshArrow from '../images/refreshArrow.png'
import stats from './statsData'

class Stats extends React.Component {
    constructor() {
        super()
        this.state = {
            stats: stats,
            randomStats: stats,
            isLoading: false
        }

        this.displayStats = this.displayStats.bind(this)
        this.countUp = this.countUp.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    displayStats() {
        let stats_array = []
        let selected
        let items = this.state.stats
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

        this.setState({ randomStats: stats_array })
    }

    countUp() {
        this.setState({ isLoading: true })
        let maxVals = []
        for (let i = 0; i < 4; i++) {
            maxVals[i] = JSON.parse(JSON.stringify(this.state.randomStats[i].value))
        }
        let items = this.state.randomStats

        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                for (let j = 0; j < 4; j++) {
                    if (i === 19) {
                        items[j].value = maxVals[j]
                        this.setState({ isLoading: false })
                    } else {
                        items[j].value = Math.trunc(maxVals[j] / (20 - i))
                    }
                }
                this.setState({ randomStats: items })
            }, 20 * i)
        }
    }

    handleClick() {
        if(this.state.isLoading === false) {
            setTimeout(() => this.displayStats(), 1)
            setTimeout(() => this.countUp(), 1)
        }
    }

    render() {
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

export default Stats