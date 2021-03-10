import React, { useEffect, useState } from 'react';
import firebaseForCaptcha from 'firebase';
import firebase from '../../firebase/firebaseConfig';
import { Container, Captcha, Title, DownArrow, Input, Button, Error } from './ChatbotPhoneConformation-style'
import { bookTable } from '../../redux/actions/reservationActions';
import { useDispatch, useSelector } from 'react-redux';
import { ReservationData } from '../../redux/types/reservationTypes';
import { RootState } from '../../redux';
import Loader from '../loader/Loader';
import convertPhoneNumber from '../../helpers/convertPhoneNumber';
import { RECEIVED_MESSAGE_SUCCESS } from '../../redux/constants/chatbotConstants';

declare global {
  interface Window {
    MyNamespace: any,
    recaptchaVerifier: any,
  }
}
const ChatbotPhoneConformation = ({ phoneNumber, date, table, partySize, time, email, name }) => {
  const dispatch = useDispatch();
  const { loading, reservationData: reservationDataAfterBookingCompleted, reservationDataFromChatbot: reservationDataAfterBookingCompletedFromChatbot }: { loading: boolean, reservationData: ReservationData, reservationDataFromChatbot: ReservationData } = useSelector((state: RootState) => state.bookTable);
  const convertedPhoneNumber = convertPhoneNumber(phoneNumber);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [code, setCode] = useState('');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    window.recaptchaVerifier = new firebaseForCaptcha.auth.RecaptchaVerifier('recaptcha-container', { size: 'normal' });
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(convertedPhoneNumber, appVerifier)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult)
      }).catch((error) => {
        console.log(error)
        setError('Failed to send sms Please try a again later')
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    if (!confirmationResult) {
      const message = [{ content: 'Please Prove you are not a robot:', fromUser: false }]
      dispatch({
        type: RECEIVED_MESSAGE_SUCCESS,
        payload: message
      })
    }
  }, [confirmationResult])

  useEffect(() => {
    if (confirmationResult && !reservationDataAfterBookingCompletedFromChatbot && !loading) {
      const message = [{ content: 'Verification Sms message was sent to your phone, please enter the code you received:', fromUser: false }]
      dispatch({
        type: RECEIVED_MESSAGE_SUCCESS,
        payload: message
      })
    }
  }, [confirmationResult, reservationDataAfterBookingCompletedFromChatbot])

  const sendCode = () => {
    if (confirmationResult) {
      setProcessing(true);
      confirmationResult.confirm(code).then((result) => {
        dispatch(bookTable({ date, partySize, time, table, email, name, fromChatbot: true }))

      }).catch((error) => {
        console.log(error)
        setProcessing(false);
        setError('wrong code entered!, please try again.')
      });
    }
  }

  return (
    <Container>
      {!confirmationResult && <>
        {/* <Title>Please Prove you are not a robot:<DownArrow>&darr;</DownArrow>  </Title> */}
        <Captcha id="recaptcha-container"></Captcha>
      </>}
      {confirmationResult && !reservationDataAfterBookingCompletedFromChatbot && <>
        {loading && <Loader />}
        {/* <Title>Verification Sms message was sent to your phone, please enter the code you received.</Title> */}
        <Input placeholder="Enter Verification Code" type="text" onChange={e => {
          setError('');
          setCode(e.target.value)
        }} />
        {error && !reservationDataAfterBookingCompletedFromChatbot && <Error>{error}</Error>}
        <Button disabled={!processing && code ? false : true} onClick={() => sendCode()} id="confirm-code">
          Book!
    </Button>
      </>}
    </Container>
  );
}

export default ChatbotPhoneConformation;
