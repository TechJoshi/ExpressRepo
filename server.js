const express = require('express')
const routerEmp = require('./route/emp')
const bodyParser = require('body-parser')

const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json())

// use all the routers
app.use('/emp', routerEmp)

// routes
app.get('/', (request, response) => {
    response.send('welcome to my backend')
})

app.listen(9898, () => {
    console.log('server started on port 9898')
})
