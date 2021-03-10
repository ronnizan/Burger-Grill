import styled from 'styled-components';
import { FaRobot } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdSend } from 'react-icons/io';


export const Chatbot = styled.form<{ chatOpen: boolean }>`
  background: lightgrey;
  border-radius: 10px;
  z-index: 10000;
  position: fixed;
  bottom: 110px;
  left: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.9);
  height: 310px;
  overflow-y: scroll;
  width: 310px;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 10px;

  }
  ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  display: ${({ chatOpen }) => (chatOpen ? 'block' : 'none')};
`;
export const ChatbotTopRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-height: 60px;
  background: lightblue;
  z-index: 10000;
  position: sticky;
  top: 0;
`;
export const ChatbotTopRowText = styled.div`
  font-size: 1.1rem;
  position: absolute;
  top: 10px;
`;
export const ChatbotUserName = styled.p`
  font-size: 0.9rem;
  color: black;
  bottom: 10px;
  position: absolute;
`;
export const ChatbotBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 200px;
`;
export const ChatbotRow = styled.div<{ isThisUserMessage: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ isThisUserMessage }) =>
    isThisUserMessage ? 'row' : 'row-reverse'};
  margin: 5px;
  width:100%;
`;
export const ChatbotColumnWithOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;
export const ChatbotColumnWithOptionsContent = styled.div<{isRestaurantOption: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background:transparent;
  justify-content: center;
  margin: 5px;
  width: ${({ isRestaurantOption }) =>
  isRestaurantOption ? '' : '65px'};
  cursor: pointer;
  :hover{
    transform:scale(1.1)
  }
`;

export const PaypalWrapper = styled.div`
  border: none;
  outline: none;
  margin: 10px auto;
  margin-left: 30px;
`;
export const ChatbotColumnWithOptionsContentText = styled.p`
font-size:14px;
font-weight:bold;
margin-bottom:5px;
text-align: center;
`;

export const ChatbotSelfUserContent = styled.p`
  background-color: #dcf8c6;
  padding: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  position: relative;
  ::before {
    content: '';
    color: #dcf8c6;
    position: absolute;
    top: 50%;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid #dcf8c6;
    left: -8px;
  }
`;
export const ChatbotBotContent = styled.p`
  background-color: white;
  padding: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  position: relative;
  display: flex;
  align-items: center;
  ::before {
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid white;
    content: '';
    color: white;
    position: absolute;
    top: 50%;
    right: -8px;
  }
`;

export const Image = styled.img<{ isThisUserMessage: boolean }>`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: ${({ isThisUserMessage }) =>
    isThisUserMessage ? '10px' : '0'};
  margin-left: ${({ isThisUserMessage }) => (isThisUserMessage ? '0' : '10px')};
  @media screen and (max-width: 750px) {
    width: 50px;
    height: 50px;
  }
`;
export const OptionImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  @media screen and (max-width: 750px) {
    width: 50px;
    height: 50px;
  }
`;

export const ChatbotInputAndButton = styled.div`
  display: flex;
  background-color: white;
  outline: none;
  font-size: 1rem;
  position: sticky;
  bottom: 0;
  border-top: 2px solid black;
  z-index: 10000;
`;
export const ChatbotInput = styled.input`
  width: 85%;
  background-color: white;
  padding: 10px;
  outline: none;
  font-size: 1.3rem;
  bottom: 0;
  border: none;
`;
export const ChatbotSendBtnWrapper = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;
export const ChatbotSendBtn = styled(IoMdSend)`
  cursor: pointer;
  height: 49px;
  width: 50px;
  &:hover {
    color: green;
  }
`;

export const OpenChatbotBtn = styled(FaRobot)`
  display: flex;
  position: fixed;
  bottom: 20px;
  left: 20px;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: black;
  background-color: lightblue;
  border-radius: 50%;
  padding: 10px;
  font-size: 4.5rem;
  cursor: pointer;
  z-index: 10000;
  &:hover {
    transform: scale(1.2);
  }

`;
export const CloseChatbotBtn = styled(AiOutlineClose)`
  display: flex;
  position: fixed;
  bottom: 20px;
  left: 20px;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: black;
  background-color: lightblue;
  border-radius: 50%;
  padding: 10px;
  font-size: 4.5rem;
  cursor: pointer;
  z-index: 10000;
  &:hover {
    transform: scale(1.2);
  }
`;
