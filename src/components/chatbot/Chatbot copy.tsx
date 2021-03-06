import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Chatbot = () => {
  const [chatbotMessages, setChatbotMessages] = useState([])
  const [chatbotId, setChatbotId] = useState(localStorage.getItem('chatbot') || '');

  useEffect(() => {
    const interactWithChatbot = async () => {
      const res = await axios.post('https://us-central1-burgergril-30358.cloudfunctions.net/api/dialogFlow/text-query', { text: 'Who are you?' });
      setChatbotMessages(res.data.fulfillmentMessages)
      // console.log(chatbotMessages)
    }
    interactWithChatbot();
  }, [])

  useEffect(() => {
    if (!chatbotId) {  
      let uid = uidGenerator()
      setChatbotId(uid)
      localStorage.setItem('chatbot', uid)
    }

  }, [chatbotId])

  const uidGenerator = () => {
    let S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
  }

  return (
    <div>
      {chatbotMessages && chatbotMessages.map(chatbot => chatbot[0])}
      {console.log(chatbotMessages)}
      {chatbotId}
    </div>
  )
}

export default Chatbot
