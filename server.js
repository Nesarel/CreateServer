const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

const {getOneCode} = require('./controller/code')

// test
// console.log(process.env.PG_CONNECTION_STRING);

app.get('/:id', async (req, res) => {
    const data = await getOneCode(req.params.id)
    res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})