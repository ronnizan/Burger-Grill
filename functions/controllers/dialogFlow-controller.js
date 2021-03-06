const express = require('express');
const router = express.Router();
const chatbot = require('../helpers/chatbot')


router.post('/text-query', async (req, res) => {
  try {
    let responses = await chatbot.textQuery(req.body.text,req.body.uid,req.body.parameters)
    res.send(responses[0].queryResult);
  } catch (error) {
    console.log(error)
  }
 

});
router.post('/event-query',async (req, res) => {
  try {
    let responses = await chatbot.eventQuery(req.body.event,req.body.uid,req.body.parameters)
    res.send(responses[0].queryResult);
  } catch (error) {
    console.log(error)
  }
});



module.exports = router;
