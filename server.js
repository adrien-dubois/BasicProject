const express = require('express')
const cors = require('cors')
const axios = require('axios')
const bodyParser = require("body-parser");

require('dotenv').config()

const PORT = process.env.REACT_APP_EXPRESS_PORT

const app = express()

app.use(bodyParser.json());
app.use(cors())

app.listen(PORT, () => console.log(`Backend is running on port ${PORT}`))