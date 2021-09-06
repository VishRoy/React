import React, {useEffect, useState} from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import axios from 'axios';
import config from '../config';

const Widgets = () => {
    const [newsData, setNewsData] = useState([])
    const newsArticle = (heading, subtitle, url) => (
        <a className="widgets__article__link" href={url} target="_blank">
        <div className="widgets__article"> 
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div> 
        </div>
        </a>
    )

    useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${config.NEWS_KEY}`)
        .then(res => {
            setNewsData(res.data.results)
        })
    }, [])

    

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsData.map((news) => {
                return newsArticle(news.title, news.section, news.url)
            })}
        </div>
    )
}

export default Widgets