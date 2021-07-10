import React from 'react'
import '../css/Stats.css'
import TitleBlock from "./TitleBlock"
import refreshArrow from '../images/refreshArrow.png'
import stats from './statsData'

class Stats extends React.Component {
    constructor() {
        super()
        this.state = {
            stats: stats
        }

        this.displayStats = this.displayStats.bind(this)
    }

    displayStats() {
        let stats_array = []
        let selected
        let items = this.state.stats.slice(0)
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
        return stats_array
    }

    render() {
        let stats = this.displayStats()
        return (
            <div className='stats-bg'>
                <div className='stats-header'>
                    <TitleBlock lineOne='// Stats' lineTwo='Who doesn&apos;t like numbers' />

                    <img
                        src={refreshArrow}
                        alt='Get random stats'
                        className='refreshArrow'
                        title='Get random stats'
                        onClick={() => this.forceUpdate()}
                    />
                </div>

                <ul className='stats-container'>
                    <li className='statsItem'>
                        <h2 className='bigNum'>{stats[0].value}</h2>
                        <h2 className='statsTxt'>{stats[0].name}</h2>
                    </li>
                    <li className='statsItem'>
                        <h2 className='bigNum'>{stats[1].value}</h2>
                        <h2 className='statsTxt'>{stats[1].name}</h2>
                    </li>
                </ul>
                <ul className='stats-container'>
                    <li className='statsItem'>
                        <h2 className='bigNum'>{stats[2].value}</h2>
                        <h2 className='statsTxt'>{stats[2].name}</h2>
                    </li>
                    <li className='statsItem'>
                        <h2 className='bigNum'>{stats[3].value}</h2>
                        <h2 className='statsTxt'>{stats[3].name}</h2>
                    </li>
                </ul>

                <p className='stats-footer'><em>
                    The above data is updated automatically every day. Last update: {this.state.stats[8].value}
                </em></p>
            </div>
        )
    }
}

export default Stats