const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const routeConfig = require('./config/routes')
const catchAsyncErrors = require('./utils/catchAsyncErrors')
const { requestMiddleware, errorExceptionMiddleware, logMiddleware } = require('./middlewares')
const cors = require('cors')

const app = express()
let startAt = ''

app.use(cors())

// use body parser
app.use(bodyParser.json({
  type: '*/*'
}))

// handling request (extract or check param before pass to controller)
app.use(requestMiddleware)

// log middleware using morgan
app.use(logMiddleware)

// server status
app.get('/', function (req, res) {
  let current = new Date()
  let uptime = Math.abs(current - startAt) / 36e5;
  let server = {
    started: startAt,
    uptime: uptime,
    status: 'OK'
  }
  res.send(server)
})

// generating API route
Object.keys(routeConfig).forEach((key, index) => {
  routeConfig[key].forEach((route) => {
    const {methods ,path ,controller} = route
    router[methods.toLowerCase()](`/${key}${path}`, catchAsyncErrors(controller))
  })
})
app.use('/api', router)

// catch application error then managing response
app.use(errorExceptionMiddleware)

// start server at specific port
app.listen(3000, () => {
  startAt = new Date()
  console.log('app listening on port 3000!')
})