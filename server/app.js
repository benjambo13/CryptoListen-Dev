var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const axios = require('axios');

const User = require('./models/Users')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build'))); 

const dbURI = 'mongodb+srv://crypto-user:crypto-user@musicdiss.hlypr.mongodb.net/MusicStreaming?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("Connected to Database")
        // app.listen(7777)
    })
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/newUser', (req, res) => {
    const user = new User({
        username: req.query.username,
        password: req.query.password,
        time: 0,
        hps: 0,
        throttle: 0
    })

    user.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/usernameAvailable', (req, res) => {
    User.find({ username: req.query.username })
        .then((result) => {
            res.send(result === undefined || result.length == 0)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/checkPassword', (req, res) => {
    User.find({ username: req.query.username })
        .then((result) => {
            if (result === undefined || result.length == 0) {
                res.send(false)
            } else {
                res.send(result[0].password == req.query.password)
            }
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/setStats', (req, res) => {
    var worker = req.query.username
    var hps = req.query.hashes.toString()
    var throttle = req.query.throttle.toString()
    var time = req.query.time.toString()
    User.updateOne({"username": worker}, {"time": time, "hps": hps, "throttle": throttle})
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/getDBStats', (req, res) => {
    var worker = req.query.username
    User.findOne({"username": worker})
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/getStats', (req, res) => {
    var address = req.query.address
    var worker = req.query.username
    axios.get('https://api.moneroocean.stream/miner/' + address + '/stats/' + worker)
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log("Failed to get Stats");
    });
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
