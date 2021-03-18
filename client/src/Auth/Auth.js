import axios from 'axios';

class Auth {
    constructor() {
        this.authenticated = false
        this.username = ''
        this.userTime = 0
    }

    getUsername = () => {
        return this.username
    }

    getInitialTime = () => {
        axios.get('/getDBStats', { params: { username: this.username }})
        .then((result) => {
            this.userTime = result.data.siteTime
        })
    }

    setTimer = () => {
        this.getInitialTime()
        this.sessionTimeInterval = setInterval(() =>  this.timeHandler(), 30000);
    }

    endTimer = () => {
        this.userTime = 0
        clearInterval(this.sessionTimeInterval);
    }

    timeHandler = () => {
        this.userTime += 30
        axios.get('/updateTime', { params: { time: this.userTime, username: this.username }})
        .catch((err) => {
            console.log(err)
        })
    }

    async login(cb, username, password) {
        return await axios.get(`/checkPassword`, { params: { username: username, password: password }})
            .then((result) => {
                if (result.data) {
                    this.authenticated = true
                    this.username = username
                    window.username = username
                    this.setTimer()
                    cb()
                    return true
                } else {
                    return false
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    logout(cb) {
        this.authenticated = false
        this.username = ''
        window.username = ''
        this.endTimer()
        cb()
    }

    async registerNew(cb, username, password) {
        await axios.get(`/newUser`, { params: { username: username, password: password }})
            .then((result) => {
                if (result.data) {
                    this.authenticated = true
                    this.username = username
                    window.username = username
                    this.setTimer()
                    cb()
                } else {
                    return false
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    isAuthenticated() {
        return this.authenticated
    }
}

export default new Auth()