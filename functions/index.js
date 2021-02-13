const functions = require('firebase-functions');

const express = require('express')
const cors = require('cors')

// http://localhost:5001/burgergril-30358/us-central1/api
const app = express();

app.use(cors());
app.use(express.json())


app.get('/',(req,res)=>{
  res.send('wowow!!!!!!vvv')
})


exports.api = functions.https.onRequest(app)