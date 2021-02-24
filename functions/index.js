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

// app.post('/send-reservation-mail', (req, res) => {
//   const { email, name, date, time, partySize, table } = req.body;
//   try {
//     const emailData = {
//       from: 'ronnizan01@gmail.com',
//       to: email,
//       subject: 'Your reservation at BurgerGril has been successfully completed',
//       html: `<h2>Thank you ${name}!</h2>
//       <br>
//       <h3>Reservation Summary:</h3>
//       <br>
//       <div style="padding:20px; display:flex;flex-direction:column;align-items:center; background:url(https://icecube-eu-286.icedrive.io/thumbnail?p=2VoUIL4GVO9Mw3vCV8QJ6W036yjKxb9YybI9TCODY%2FCYJglKV58xpjBMF68CKBoHBlf3ZPB8r%2FvJJzF4o9Z6%2BDXfzX%2Fd9FKx2XlEiXvMFZuBL8wOwCMdPxIRXlz9XOXV&w=1280&h=1280&m=cropped);
//       background-position: center;
//       background-repeat: no-repeat;
//       background-size: cover;">
//         <div style="padding:20px;background:rgb(255,255,255);text-align:center;box-shadow: 0 0 5px rgba(0, 0, 0, 0.9);margin:0 auto; ">
//           <div style="display:flex; align-items:center;">
//             <img width=50px src="https://icecube-eu-287.icedrive.io/thumbnail?p=P0afIFs6M7rnS2Yqyxh29GJ1U8Rr2hKUpDSOGB1SnWZJLX0qfqH1nX9CQCx24PNf%2FjI%2BhyFeMmJ0Ktnc1MIacU%2Fh3rafH1%2BQs39e8Q9dndrB0aMkf0UdVXPSDk7lO6dh&w=1280&h=1280&m=cropped"/>&nbsp;&nbsp;
//             <h2>BurgerGrill</h2>
//           </div>
//           <br>
//           <p style="font-size:larger"><strong>Date:</strong> ${date
//             .split(' ')
//             .join('/')}, ${time}:00.</p>
//             <br>
//           <p style="font-size:larger"><strong>Guests:</strong> ${partySize}.</p>
//           <br>
//           <p style="font-size:larger"><strong>Table:</strong> ${table.name}.</p>
//           <br>
//           <p style="font-size:larger"><strong>Location:</strong> ${
//             table.location
//           }.</p>
//         </div>
//       </div>
//       <hr />

//       <p>This email may contain sensitive information</p>
//       <p>${process.env.CLIENT_URL}</p>`,
//     };
//     sendEmailWithNodemailer(req, res, emailData);
//   } catch (error) {
//     console.log(error);
//   }
// });


app.get('/config/paypal',(req, res)=> res.send(process.env.PAYPAL_CLIENT_ID))





exports.api = functions.https.onRequest(app);
