import React from "react"
import '../css/Tools.css'
import TitleBlock from "./TitleBlock"
import gcloud from '../images/gcloud.png'
import jira from '../images/jira.png'
import kibana from '../images/kibana.png'
import mongo from '../images/mongo.png'
import postman from '../images/postman.png'
import vs from '../images/vs.png'

class Tools extends React.Component {
    render() {
        return (
            <div className="bg">
                <TitleBlock lineOne='// Tools' lineTwo='Here&apos;s what I&apos;ve worked with' />

                <div className="tools-container">
                    <div>
                        <div className="tools-item">
                            <a href="https://cloud.google.com/">
                                <img src={gcloud} alt='Google Cloud' className='tools-img' />
                            </a>
                            <p className="tools-txt">Google Cloud</p>
                        </div>
                    </div>
                    <div>
                        <div className="tools-item">
                            <a href="https://www.atlassian.com/software/jira">
                                <img src={jira} alt='Jira' className='tools-img' />
                            </a>
                            <p className="tools-txt">Jira</p>
                        </div>
                    </div>
                    <div>
                        <div className="tools-item">
                            <a href="https://www.elastic.co/kibana/">
                                <img src={kibana} alt='Kibana' className='tools-img' />
                            </a>
                            <p className="tools-txt">Kibana</p>
                        </div>
                    </div>
                    <div>
                        <div className="tools-item">
                            <a href="https://www.mongodb.com/">
                                <img src={mongo} alt='MongoDB' className='tools-img' />
                            </a>
                            <p className="tools-txt">MongoDB</p>
                        </div>
                    </div>
                    <div>
                        <div className="tools-item">
                            <a href="https://www.postman.com/">
                                <img src={postman} alt='Postman' className='tools-img' />
                            </a>
                            <p className="tools-txt">Postman</p>
                        </div>
                    </div>
                    <div>
                        <div className="tools-item">
                            <a href="https://visualstudio.microsoft.com/">
                                <img src={vs} alt='Visual Studio' className='tools-img' />
                            </a>
                            <p className="tools-txt">Visual Studio</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tools