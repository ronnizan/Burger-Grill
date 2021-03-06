import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import {
  OpenChatbotBtn,
  CloseChatbotBtn,
  Chatbot,
  ChatbotTopRow,
  ChatbotTopRowText,
  ChatbotUserName,
  ChatbotBody,
  ChatbotRow,
  ChatbotColumnWithOptions,
  ChatbotColumnWithOptionsContent,
  ChatbotColumnWithOptionsContentText,
  // ChatCommentDate,
  ChatbotSelfUserContent,
  ChatbotBotContent,
  // ProfileImageLinkWrapper,
  Image,
  OptionImage,
  ChatbotInputAndButton,
  ChatbotInput,
  ChatbotSendBtnWrapper,
  ChatbotSendBtn,
} from './Chatbot-style';
// import {
import { User } from './../../redux/types/authTypes';
import { initialChatbot, pickupSelected } from '../../redux/actions/chatbotActions';
import { RootState } from '../../redux';
import { Message } from './../../redux/types/popupMessageTypes';
import { ChatbotMessage } from '../../redux/types/chatbotTypes';
import ChatbotLogo from '../../../src/images/burger-logo.png';
import { SendChatbotMessage } from './../../redux/actions/chatbotActions';
import AnonymousUser from '../../images/user.png';
import Loader from '../loader/Loader';
import { selectItemForPopup } from './../../redux/actions/productsActions';
import { MenuItem } from './../../redux/types/productsType';
import { CartItem } from '../../redux/types/cartTypes';



const ChatBot = ({ user }: { user: User }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [restaurantOptionSelected, setRestaurantOptionSelected] = useState('');
  // const [content, setContent] = useState('');
  const [chatbotId, setChatbotId] = useState(localStorage.getItem('chatbot') || '');
  const { loading, messages, error }: { loading: boolean, messages: ChatbotMessage[], error: string } = useSelector((state: RootState) => state.chatbot);
  const { menuItems, }: { menuItems: MenuItem[], loading: boolean, error: string } = useSelector((state: RootState) => state.allProducts);
  const { cartItems }: { cartItems: CartItem[] } = useSelector((state: RootState) => state.cartChatbot);


  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    if (!chatbotId) {
      let uid = uidGenerator()
      setChatbotId(uid)
      localStorage.setItem('chatbot', uid)
    }
    if (chatbotId) {
      dispatch(initialChatbot(chatbotId))
    }
  }, [chatbotId])

  const uidGenerator = () => {
    let S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
  }


  useEffect(() => {
    if (messages.length > 1) {
      // scroll.scrollToBottom({
      //   containerId: 'myScrollToContainer',
      // });
      scroll.scrollMore(190, {
        containerId: 'myScrollToContainer'
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  const submitMessage = (e) => {
    e.preventDefault();
    if (!content) {
      return;
    }
    dispatch(SendChatbotMessage(content, chatbotId));
    setContent('');
  };

  const handleRestaurantOption = (optionSelected: string) => {
    if (optionSelected === 'Pickup') {
      dispatch(pickupSelected(chatbotId))
      setRestaurantOptionSelected('Pickup')
    }
    if (optionSelected === 'Delivery') {
      // dispatch(pickupSelected(chatbotId))
      setRestaurantOptionSelected('Delivery')
    }
    if (optionSelected === 'Book A Table') {
      dispatch(pickupSelected(chatbotId))
      setRestaurantOptionSelected('Pickup')
    }

  }
  const handleMealOption = (mealSelected: string) => {
    if (cartItems.length === 0) {
      const menuItem = menuItems.find(item => item.title === mealSelected)
      //second argument is to send true that this actions was sent from chatbot
      dispatch(selectItemForPopup(menuItem, true));
    }


  }



  return (
    <>

      <Chatbot
        id='myScrollToContainer'
        onSubmit={submitMessage}
        chatOpen={chatOpen}
      >

        <ChatbotTopRow>
          <ChatbotTopRowText>BurgerGrill Chatbot</ChatbotTopRowText>
          {user && user.name &&
            <ChatbotUserName>
              Hi {user && user.name}!
            </ChatbotUserName>}
        </ChatbotTopRow>
        <ChatbotBody>

          {messages.length > 0 &&

            messages.map((message, index) => {
              return message.image ? <ChatbotColumnWithOptions
                key={index}
              >
                <ChatbotColumnWithOptionsContent isRestaurantOption={message.type === 'restaurantOptions'} onClick={() => {
                  if (!restaurantOptionSelected && message.type === 'restaurantOptions') {
                    handleRestaurantOption(message.content)
                  }
                  if (restaurantOptionSelected && message.type === 'pickupOptionMeal') {
                    handleMealOption(message.content)

                  }

                }}>
                  <ChatbotColumnWithOptionsContentText>{message.content}</ChatbotColumnWithOptionsContentText>
                  <ChatbotColumnWithOptionsContentText>{message.type === 'pickupOptionMeal' && '$22'}</ChatbotColumnWithOptionsContentText>
                  <OptionImage
                    src={message.image}
                  ></OptionImage>
                </ChatbotColumnWithOptionsContent>

              </ChatbotColumnWithOptions>


                :

                <ChatbotRow
                  isThisUserMessage={message.fromUser}
                  key={index}
                >
                  <Image
                    isThisUserMessage={message.fromUser}
                    src={message.fromUser ? AnonymousUser : ChatbotLogo}
                  ></Image>
                  {message.fromUser ? (
                    <ChatbotSelfUserContent>
                      {message.content}
                    </ChatbotSelfUserContent>
                  ) : (
                    <ChatbotBotContent>
                      {message.content}
                    </ChatbotBotContent>
                  )}
                </ChatbotRow>



            })}
        </ChatbotBody>
        <ChatbotInputAndButton>
          <ChatbotInput
            value={content}
            required
            onChange={(e) => setContent(e.target.value)}
          ></ChatbotInput>
          <ChatbotSendBtnWrapper disabled={false}>
            <ChatbotSendBtn></ChatbotSendBtn>
          </ChatbotSendBtnWrapper>
        </ChatbotInputAndButton>
      </Chatbot>
      {chatOpen ? (
        <CloseChatbotBtn
          onClick={() => setChatOpen(!chatOpen)}
        ></CloseChatbotBtn>
      ) : (
        <OpenChatbotBtn
          onClick={() => setChatOpen(!chatOpen)}
        ></OpenChatbotBtn>
      )}
    </>
  );
};
export default ChatBot;
