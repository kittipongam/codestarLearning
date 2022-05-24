var express = require("express")
var server = express()
server.listen(15000)
server.use(express.static("."))