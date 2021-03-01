import React from 'react'
import {
    Tabs,
    Tab,
} from 'carbon-components-react';
import "./Main.scss";
import Music from './Music/Music'
import About from './About/About'
import Mining from './Mining/Mining'

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            totalHashes: 0
        }
    }

    useEffect = () => {
        this.interval = setInterval(() => {
            console.log(window["getTotalHashes"]())
            this.setState({totalHashes: window["getTotalHashes"]()})
        }, 1000);
    }

    render() {
        return (
            <div className='Main'>
                <Tabs>
                    <Tab label="About">
                        <About />
                    </Tab>
                    <Tab label="Music">
                        <Music />
                    </Tab>
                    <Tab label="Mining">
                        <Mining />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default Main