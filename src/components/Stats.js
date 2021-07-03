import React from 'react'
import '../css/Stats.css'
import TitleBlock from "./TitleBlock"
import refreshArrow from '../images/refreshArrow.png'

class Stats extends React.Component {
    constructor() {
        super()
        this.state = {
            stats: [
                {
                    shown: 0
                }, 
                {
                    shown: 0
                }, 
                {
                    shown: 0
                }, 
                {
                    shown: 0
                }, 
                {
                    shown: 0
                }, 
                {
                    shown: 0
                },
                {
                    name: 'Programming Languages',
                    value: 10,
                    shown: 0
                },
                {
                    name: 'Agile Certification',
                    value: 1,
                    shown: 0
                }
            ],
            isLoaded: false
        }

        this.displayStats = this.displayStats.bind(this)
    }

    componentDidMount() {
        let repos = []
        let commits = 0
        let size = 0
        let langs = 0
        let adds = 0
        let dels = 0

        // fetch repos list
        fetch("https://api.github.com/users/jmorofsky/repos", {
            headers: {
                authorization: "token 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"
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    let items = this.state.stats
                    items[0] = {
                        name: 'GitHub Projects',
                        value: result.length,
                        shown: 0
                    }
                    this.setState({ stats: items })
                    repos = result.slice(0)
                }
            )

        // fetch commits for each repo
        setTimeout(() => {
            for (let i = 0; i < repos.length; i++) {
                let url = repos[i].commits_url
                url = url.slice(0, url.length - 6)

                fetch(url, {
                    headers: {
                        authorization: "token: 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"
                    }
                })
                    .then(res => res.json())
                    .then(
                        // eslint-disable-next-line no-loop-func
                        (result) => {
                            commits += result.length

                            let items = this.state.stats.slice(0)
                            items[1] = {
                                name: 'GitHub Commits',
                                value: commits,
                                shown: 0
                            }
                            this.setState({ stats: items })

                            //fetch additions and deletions
                            for (let j = 0; j < result.length; j++) {
                                fetch(result[j].url, {
                                    headers: {
                                        authorization: "token: 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"
                                    }
                                })
                                    .then(res => res.json())
                                    .then(
                                        // eslint-disable-next-line no-loop-func
                                        (result) => {
                                            for (let k = 0; k < result.files.length; k++) {
                                                adds += result.files[k].additions
                                                dels += result.files[k].deletions

                                                let items = this.state.stats.slice(0)
                                                items[2] = {
                                                    name: 'GitHub Deletions',
                                                    value: dels,
                                                    shown: 0
                                                }
                                                items[3] = {
                                                    name: 'GitHub Additions',
                                                    value: adds,
                                                    shown: 0
                                                }
                                                this.setState({ stats: items })
                                            }
                                        }
                                    )
                            }
                        }
                    )
            }
        }, 100)

        //get repos total size
        setTimeout(() => {
            for (let i = 0; i < repos.length; i++) {
                size += repos[i].size
            }

            let items = this.state.stats.slice(0)
            items[4] = {
                name: 'KB of Code in Repos',
                value: size,
                shown: 0
            }
            this.setState({ stats: items })
        }, 100)

        //get languages
        setTimeout(() => {
            for (let i = 0; i < repos.length; i++) {
                let url = repos[i].languages_url

                fetch(url, {
                    headers: {
                        authorization: "token: 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"
                    }
                })
                    .then(res => res.json())
                    .then(
                        // eslint-disable-next-line no-loop-func
                        (result) => {
                            langs += Object.keys(result).length

                            let items = this.state.stats.slice(0)
                            items[5] = {
                                name: 'Languages used in Repos',
                                value: langs,
                                shown: 0
                            }
                            this.setState({ stats: items })
                        }
                    )
            }
            this.setState({ isLoaded: true })
        }, 100)
    }

    //todo: reset shown state
    displayStats() {
        let stats_array = []

        for (let i = 0; i < 4; i++) {
            let selected = false
            while (selected === false) {
                let id = Math.floor(Math.random() * 8)
                if (this.state.stats[id].shown === 0) {
                    stats_array[i] = this.state.stats[id]

                    let items = this.state.stats.slice(0)
                    //items[id].shown = 1
                    //this.setState({ stats: items })
                    // ---------------------------------------------------- todo: fix infinite loading

                    selected = true
                }
            }
        }

        return stats_array
    }

    render() {
        let stats = this.displayStats()

        if (this.state.isLoaded) {
            return (
                <div className='stats-bg'>
                    <div className='stats-header'>
                        <TitleBlock lineOne='// Stats' lineTwo='Who doesn&apos;t like numbers' />
                        <img src={refreshArrow} alt='Click to refresh' className='refreshArrow' />
                    </div>

                    <ul className='stats-container'>
                        <li>
                            <h2>{stats[0].value}</h2>
                            <h2>{stats[0].name}</h2>
                        </li>
                        <li>
                            <h2>{stats[1].value}</h2>
                            <h2>{stats[1].name}</h2>
                        </li>
                    </ul>
                    <ul className='stats-container'>
                        <li>
                            <h2>{stats[2].value}</h2>
                            <h2>{stats[2].name}</h2>
                        </li>
                        <li>
                            <h2>{stats[3].value}</h2>
                            <h2>{stats[3].name}</h2>
                        </li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div className='stats-bg'>
                    <div className='stats-header'>
                        <TitleBlock lineOne='// Stats' lineTwo='Who doesn&apos;t like numbers' />
                        <img src={refreshArrow} alt='Click to refresh' className='refreshArrowLoading' />
                    </div>
                </div>
            )
        }
    }
}

export default Stats