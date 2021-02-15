const nodeMailer = require('nodemailer');

sendEmailWithNodemailer = (req, res, emailData) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.NODEMAILER_USER_EMAIL_FROM, 
      pass: process.env.NODEMAILER_USER_PASS, 
    },
    tls: {
      ciphers: 'SSLv3',
    },
  });
  if (emailData.subject === 'Password Reset link') {
    return transporter
      .sendMail(emailData)
      .then((info) => {
        console.log(`Message sent: ${info.response}`);
        return res.json({
          message: `Email message has been sent to your email address. Follow the instruction to reset your Password`,
        });
      })
      .catch((err) => {
        console.log(`Problem sending email: ${err}`);
        return res.status(400).json({
          error: `failed to send email, please try again later`,
        });
      });
  } else {
    return transporter
      .sendMail(emailData)
      .then((info) => {
        console.log(`Message sent: ${info.response}`);
        return res.json({
          message: `Email message has been sent to your email address. Follow the instruction to activate your account`,
        });
      })
      .catch((err) => {
        console.log(`Problem sending email: ${err}`);
        return res.status(400).json({
          error: `failed to send email, please try again later`,
        });
      });
  }
};
module.exports = {
  sendEmailWithNodemailer,
};
