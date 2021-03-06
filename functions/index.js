const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const emailRoutes = require('./controllers/email-controller')
const dialogflowRoutes = require('./controllers/dialogFlow-controller')
   
// require('dotenv').config({path:__dirname+'/./../../.env'})


// http://localhost:5001/burgergril-30358/us-central1/api/send-reservation-mail
// http://localhost:5001/burgergril-30358/us-central1/api/config/paypal
// https://us-central1-burgergril-30358.cloudfunctions.net/api/config/paypal

const app = express();

app.use(cors());
app.use(express.json());

app.use('/email/', emailRoutes);   
app.use('/dialogFlow/', dialogflowRoutes);

  
app.get('/config/paypal',(req, res)=> res.send(process.env.PAYPAL_CLIENT_ID))



  

exports.api = functions.https.onRequest(app);
