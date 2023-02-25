const express = require('express')
const app = express()
const port = 3001
var mysql = require('mysql');
const logger = require("./module/logger")
// const CONFIG = require("./config/config")
 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  
})
logger.log('message')
