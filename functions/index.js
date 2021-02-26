const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const emailRoutes = require('./controllers/email-controller')
const { sendEmailWithNodemailer } = require('./helpers/nodemailer');
require('dotenv').config();



// http://localhost:5001/burgergril-30358/us-central1/api/send-reservation-mail
const app = express();

app.use(cors());
app.use(express.json());

app.use('/email/', emailRoutes);


app.get('/config/paypal',(req, res)=> res.send(process.env.PAYPAL_CLIENT_ID))





exports.api = functions.https.onRequest(app);
