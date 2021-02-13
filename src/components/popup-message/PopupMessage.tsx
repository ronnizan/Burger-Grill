import React from 'react';
import { FaCheck, FaTimesCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {  useSelector } from 'react-redux';
import { MessageContainer } from './PopupMessage-style';
import { Message } from '../../redux/types/popupMessageTypes';
import { RootState } from '../../redux/index';
const PopupMessage = () => {
  const { message }:{message:Message} = useSelector((state: RootState) => state.popupMessage);

  return (
    <> 
      {message && (
        <IconContext.Provider value={{ size: '40px' }}>   
          <MessageContainer error={message.type === 'error'}>
            {message.type === 'error' ?    <FaTimesCircle /> : <FaCheck />}{' '}
            <span style={{ marginRight: '10px' }}></span>  
            {message.content}
          </MessageContainer>
        </IconContext.Provider>
      )}  
    </>
  );
};

export default PopupMessage;
