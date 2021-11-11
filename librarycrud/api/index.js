const express = require('express')
const router = express.Router()
require('./routes/crud')(router)
require('./routes/auth')(router)

module.exports = router