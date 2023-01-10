import {useEffect, useState} from 'react'
import axios from 'axios'

function Newsfeed() {
    const [articles, setArticles] = useState(null);
    useEffect(() => {

        const options = {
          method: 'GET',
          url: 'http://localhost:8000/news',
        };
        
        axios.request(options).then((response) => {
            setArticles(response.data);
        }).catch((error) => {
            console.error(error);
        });
        /*setArticles([{
            Title:"Eurozone Inflation Taps Highest Rate Ever Recorded Reaching 9.1%, as Nord Stream, Gazprom Halt Gas Supplies ECONOMICS | 12 mins ago ",
            URL:"https://news.bitcoin.com/eurozone-inflation-taps-highest-rate-ever-recorded-reaching-9-1-as-nord-stream-gazprom-halt-gas-supplies/"
        },{
            Title:"Bitcoin’s Mining Difficulty Change Prints 2022’s Second Largest Increase — Metric Nears All-Time High NEWS | 2 hours ago ",
            URL:"https://news.bitcoin.com/bitcoins-mining-difficulty-change-prints-2022s-second-largest-increase-metric-nears-all-time-high/"
        },{
            Title:"Nigerian Central Bank Slashes CBDC Transaction Fees by 50%AFRICA | 1 day ago | Terence Zimwara",
            URL:"https://news.bitcoin.com/gofrom/featured_rotator/nigerian-central-bank-slashes-cbdc-transaction-fees-by-50"
        },{
            Title:"Xbox Boss Phil Spencer Skeptical About Metaverse, Criticizes Play-to-Earn ModelsMETAVERSE | 1 day ago | Sergio Goschenko",
            URL:"https://news.bitcoin.com/gofrom/featured_rotator/xbox-boss-phil-spencer-skeptical-about-metaverse-criticizes-play-to-earn-models"
        },{
            Title:"Amid Colorado's Gas Flare Ban, Report Shows Half Dozen Gas and Oil Firms Are Raking in a Lot of BitcoinNEWS | 2 days ago | Jamie Redman",
            URL:"https://news.bitcoin.com/gofrom/featured_rotator/amid-colorados-gas-flare-ban-report-shows-half-dozen-gas-and-oil-firms-are-raking-in-a-lot-of-bitcoin"
        },{
            Title:"IMF Expects US Economy to Experience High Inflation for at Least Another Year or TwoECONOMICS | 2 days ago | Kevin Helms",
            URL:"https://news.bitcoin.com/gofrom/featured_rotator/imf-expects-us-economy-to-experience-high-inflation-for-at-least-another-year-or-two"
        },{
            Title:"Senator Warren 'Very Worried' About Federal Reserve Raising Interest Rates, Tipping US Economy Into RecessionECONOMICS | 2 days ago | Kevin Helms",
            URL:"https://news.bitcoin.com/gofrom/featured_rotator/senator-warren-very-worried-about-federal-reserve-raising-interest-rates-tipping-us-economy-into-recession"
        }
    ]);*/
    }, []);

    const news = articles?.slice(0,7);

    return (
        <div className="newsfeed-container">
            <h2>NewsFeed</h2>
            <div className="articles">
            {news?.map( (article, idx) => (
                <a href={article.URL} key={idx} target="blank"><p>{article.Title}</p></a>
            ))}
            </div>
        </div>
    );
}

export default Newsfeed;