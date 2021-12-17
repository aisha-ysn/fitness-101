// console.log(process.env.MONGODB_URI)
const mongoose = require('mongoose')
let uri = 'mongodb+srv://user1: mongodb+srv://srvuser1:' + process.env.PW + '@fitness-users.v6uer.mongodb.net/db1?retryWrites=true&w=majority'
mongoose.connect (uri, { useNewUrlParser: true, useUnifiedTopology: true });

const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})