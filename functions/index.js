const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const emailRoutes = require('./controllers/email-controller')
const dialogflowRoutes = require('./controllers/dialogFlow-controller')
  
const app = express();

app.use(cors());
app.use(express.json());

app.use('/email/', emailRoutes);   
app.use('/dialogFlow/', dialogflowRoutes);

  
app.get('/config/paypal',(req, res)=> res.send(process.env.PAYPAL_CLIENT_ID))



  

exports.api = functions.https.onRequest(app);
