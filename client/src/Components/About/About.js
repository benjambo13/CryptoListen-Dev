import React from 'react';
import './About.scss'

class About extends React.Component {
    render() {
        const aim = `The main ways of generating income (monetisation) from digital media today are advertising and the monthly subscription model.
        Due to the increase in concern about data collection online, the advertisment monetisation model has been critised and websites are starting to search
        for new ways of generating income from their content. The aim of this website is to investigate the feasibility of using cryptocurrency mining as a
        valid alternative, econimically as well as being socially accepted.`

        const crypto = `Cryptocurrencies only exist in the digital world – which is why, from their creation to their distribution, each and every process is 
        completed electronically. A crucial part of this process is called cryptocurrency mining. Miners are responsible for solving complex mathematical problems 
        using mining software. This is how a transaction is verified on the network and sent to the blockchain. The blockchain stores all transactions by users 
        for that specific cryptocurrency. Miners are then rewarded for their work with cryptocurrencies. Blocks can hold thousands of transactions. This website 
        will be mining the cryptocurrency Monero. Given the current state of Monero (XMR) and an average hashrate of 500 H/s, after 24 hours of mining, roughly 0.0002XMR 
        (3 pence) will be mined. This value can change dramatically due to market price and mining pool performance.` 

        const throttle = `In the mining section of this website you are able to control the throttle of the mining. The throttle is the percentage of time that the 
        user's CPU is resting. For example, if the throttle is set to 60, the user will be mining 40% of the time and resting for the other 60%. The greater the throttle 
        the less crypto mined. If you wish to REDUCE the side effects of mining, INCREASE the throttle.`

        const website = `This website is a music streaming web application which uses crytocurrency mining as its monetisation method. The aim of this website is 
        to simulate a monthly subsciption service such as Spotify or Netflix and then reduce that subscription by the amount of crypto mined during that month. The 
        site can be used with no cryptocurrency mining at all, but the user would then have to pay the full subscription amount. By turning on the mining feature 
        you are agreeing to the use of your computing power. No data will be collected about you or your machine. The side effects you may witness are:`

        const website2 = `If any of these side effects start to spoil your web experience, you can increase the throttle inside the 'mining' tab. This will decrese 
        the use of your central processing unit (CPU), but will also decrease your hashrate (the number of calculations per second). The legality of cryptocurrency
        mining in the browser can be discovered `

        const dataCollection = `All data collected will be deleted at the end of the study. The only data collected is: `

        return (
            <div className='about-container'>
                <h1>Aim</h1>
                <p>{aim}</p>

                <h1>Cryptocurrency Mining?</h1>
                <p>{crypto}</p>

                <h1>Mining Throttle</h1>
                <p>{throttle}</p>

                <h1>This Website</h1>
                <p>{website}</p>
                <ul>
                    <li>An increase in computer temperature</li>
                    <li>An increase in computer fan speed</li>
                    <li>A decrease in computer processing speed</li>
                    <li>An increase in power usage</li>
                </ul>
                <p>{website2}<a href="https://doi.org/10.31585/jbba-3-2-(1)2020" target="_blank" rel="noopener noreferrer">here</a>.</p>

                <p>All music available on this website comes from
                    <a href="https://www.bensound.com/royalty-free-music" target="_blank" rel="noopener noreferrer"> Bensound Royalty Free Music</a>
                . All rights are reserved to them.</p>

                <h1>Data Collection</h1>
                <p>{dataCollection}</p>
                <ul>
                    <li>The amount of time spent on the website (in the background is included)</li>
                    <li>The amount of time spent mining on the website (in the background is included)</li>
                    <li>Your cryptocurrency mining stats</li>
                </ul>
            </div>
        )
    }
}

export default About