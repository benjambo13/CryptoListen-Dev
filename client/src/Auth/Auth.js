import axios from 'axios';

class Auth {
    constructor() {
        this.authenticated = false
        this.username = ''
    }

    getUsername = () => {
        return this.username
    }

    async login(cb, username, password) {
        return await axios.get(`/checkPassword`, { params: { username: username, password: password }})
            .then((result) => {
                if (result.data) {
                    this.authenticated = true
                    this.username = username
                    window.username = username
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
        cb()
    }

    async registerNew(cb, username, password) {
        await axios.get(`/newUser`, { params: { username: username, password: password }})
            .then((result) => {
                if (result.data) {
                    this.authenticated = true
                    this.username = username
                    window.username = username
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