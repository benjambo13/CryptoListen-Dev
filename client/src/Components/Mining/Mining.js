import React from 'react';
import './Mining.scss'
import { Button, Tile, Slider, Toggle } from 'carbon-components-react'
import axios from 'axios';

class Mining extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mining: false,
            throttle: 40,
            poolHashrate: 0,
            rawHashrate: 0,
            totalHash: 0,
            valid: 0,
            time: 0,
            initialHashes: 0,
            hashRates: [],
            sessionThrottles: [],
            totalTime: 0,
            totalHps: 0,
            totalThrottle: 0,
            consent: false
        }

        this.statsHandler = this.statsHandler.bind(this);
        this.setStats = this.getStats.bind(this);
    }

    async componentDidMount() {
        await axios.get(`/getStats`, { params: { username: window.username, address: window.address }})
            .then((result) => {
                this.setState({ 
                    totalHash: result.data.totalHash.toFixed(0), 
                    initialHashes: result.data.totalHash.toFixed(0), 
                    valid: result.data.validShares.toFixed(0) 
                })
            })
            .catch((err) => {
                console.log(err)
            })
        
        await axios.get('/getDBStats', { params: { username: window.username }})
            .then((result) => {
                this.setState({
                    totalTime: parseInt(result.data.time),
                    totalHps: parseFloat(result.data.hps),
                    totalThrottle: parseFloat(result.data.throttle)
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    startMining = () => {
        if (!this.state.mining && this.state.consent) {
            window.startCrypto(this.state.throttle)
            this.setState({ mining: true })
            this.interval = setInterval(() =>  this.getStats(), 60000);
            this.statsInterval = setInterval(() =>  this.statsHandler(), 60000);
        }
    }

    stopMining = () => {
        if (this.state.mining) {
            window.stopCrypto()
            this.setState({ mining: false })
            clearInterval(this.interval);
            clearInterval(this.timeInterval);
            clearInterval(this.statsInterval);
        }
    }

    changeT = (value) => {
        this.setState({throttle: value})
        window.changeThrottle(value)
    }

    async getStats() {
        await axios.get(`/getStats`, { params: { username: window.username, address: window.address }})
            .then((result) => {
                this.setState({ 
                    rawHashrate: result.data.hash.toFixed(0),
                    poolHashrate: result.data.hash2.toFixed(0),
                    totalHash: result.data.totalHash.toFixed(0),
                    valid: result.data.validShares.toFixed(0)
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    getSessionHashes = () => {
        return (this.state.totalHash - this.state.initialHashes)
    }

    async statsHandler() {
        this.setState({hashRates : [...this.state.hashRates, this.state.poolHashrate]})
        this.setState({sessionThrottles : [...this.state.sessionThrottles, this.state.throttle]})
        this.setState(prev => ({ time: prev.time + 60 }))
        console.log(this.state.time)

        var hashsum = 0
        for (const x of this.state.hashRates) {
            hashsum = hashsum + parseInt(x)
        }

        var throttlesum = 0
        for (const x of this.state.sessionThrottles) {
            throttlesum = throttlesum + parseInt(x)
        }

        const sessionHpsAvg = hashsum / this.state.hashRates.length
        const sessionThrottleAvg = throttlesum / this.state.sessionThrottles.length

        let overallTime = parseInt(this.state.totalTime) + parseInt(this.state.time)

        const overallHpsAvg = (this.state.totalHps * (this.state.totalTime / overallTime)) + (sessionHpsAvg * (this.state.time / overallTime))
        const overallThrottleAvg = (this.state.totalThrottle * (this.state.totalTime / overallTime)) + (sessionThrottleAvg * (this.state.time / overallTime))

        await axios.get(`/setStats`, { params: { username: window.username, hashes: overallHpsAvg, throttle: overallThrottleAvg, time: overallTime }})
            .then((result) => {
                console.log("Database stats updated")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    getTime = () => {
        var total  = this.state.time
        var minutes = Math.floor(total / 60) % 60
        var hours = Math.floor(total / 3600)
        var time = hours.toString() + 'h ' + minutes.toString() + 'm '

        return time
    }

    render() {
        return (
            <div className='mining-container'>
                <div className='mining-controls'>
                    <Button 
                        className='mining-control-button' 
                        onClick={() => this.startMining()}
                        disabled={this.state.consent ? false : true}
                    >Start Mining *</Button>
                    <Slider 
                        ariaLabelInput="Throttle"
                        id="slider"
                        labelText="Throttle"
                        max={80}
                        min={10}
                        step={10}
                        value={this.state.throttle}
                        onChange={({ value }) => this.changeT(value)}
                    />
                    <Button 
                        className='mining-control-button mining-stop' 
                        kind='danger' 
                        onClick={() => this.stopMining()}
                    >Stop Mining</Button>
                </div>

                <div className='mining-dis'>
                    <p> Do you undersand the side effects of cryptocurrency mining and also consent to the use of you computing power for Monero Mining?</p>
                    <div className='toggle-container'>
                        <p>SELECT TO CONSENT</p>
                        <Toggle aria-label="toggle button" id="toggle" onChange={() => {
                                this.setState(prev => ({consent: !prev.consent}))
                                if (this.state.mining)
                                    this.stopMining()
                            }}
                        />
                    </div>
                    <p> * You must disable your AdBlocker and consent to be able to start mining, as most AdBlockers stop crypto mining in the browser to stop cryptojacking </p>
                    <p> * All Monero goes to the autor of this site. At the end of the study the money will be donated to a charity chosen at a later date </p>
                </div>

                <div className='mining-stats'>
                    <Tile>
                        <h2>Miner Status:</h2>
                        <span 
                            className="mining-dot" 
                            style={this.state.mining ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}
                        >
                            {this.state.mining ? "ON" : "OFF"}
                        </span>
                    </Tile> 

                    {genTile("Current Throttle", this.state.throttle)}
                    {genTile("Raw Hashrate", this.state.rawHashrate + " H/s")}
                    {genTile("Pay Hashrate", this.state.poolHashrate + " H/s")}
                    {genTile("Total Hashes", this.state.totalHash)}
                    {genTile("Session Hashes", this.getSessionHashes())}
                    {genTile("Mining Time", this.getTime())}
                    {genTile("Total Valid Shares", this.state.valid)}
                </div>
            </div>
        )
    }
}

function genTile(title, stat) {
    return (
        <Tile>
            <h2>{title}:</h2>
            <p>{stat}</p>
        </Tile>
    )
}

export default Mining