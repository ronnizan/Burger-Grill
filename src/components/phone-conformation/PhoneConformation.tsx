import React, {useEffect, useState } from 'react';
import firebaseForCaptcha from 'firebase';
import firebase from '../../firebase/firebaseConfig';
import { Captcha, Title, Input, Button, Error } from './PhoneConformation-style'
import { bookTable } from '../../redux/actions/reservationActions';
import { useDispatch, useSelector } from 'react-redux';
import { ReservationData } from '../../redux/types/reservationTypes';
import { RootState } from '../../redux';
import Loader from '../loader/Loader';
import { useHistory } from 'react-router';
import convertPhoneNumber from '../../helpers/convertPhoneNumber';
import { setTimeout } from 'timers';
import { CLEAR_RESERVATION_DATA } from '../../redux/constants/reservationConstants';

declare global {
  interface Window {
    MyNamespace: any,
    recaptchaVerifier: any,
    // confirmationResult: any
  }
}
function PhoneConformation({ phoneNumber, date, table, partySize, time }) {
  const history= useHistory();
  const dispatch = useDispatch();
  const { reservationData }: { reservationData: ReservationData } = useSelector((state: RootState) => state.reservationAvailability);
  const { loading,reservationData:ReservationDataAfterBookingCompleted }: { loading: boolean,reservationData:ReservationData } = useSelector((state: RootState) => state.bookTable);
  const convertedPhoneNumber = convertPhoneNumber(phoneNumber);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [code, setCode] = useState('');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');
// if (ReservationDataAfterBookingCompleted) {
//   history.push('/');
// }

  useEffect(() => {  
      window.recaptchaVerifier = new firebaseForCaptcha.auth.RecaptchaVerifier('recaptcha-container');
      const appVerifier = window.recaptchaVerifier;
      console.log(convertedPhoneNumber)
      firebase.auth().signInWithPhoneNumber(convertedPhoneNumber, appVerifier)
        .then((confirmationResult) => {
          setConfirmationResult(confirmationResult)
        }).catch((error) => {
          console.log(error)
          setError('Failed to send sms Please try a again later')
        });
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const sendCode = () => {
    if (confirmationResult) {
      setProcessing(true);
      confirmationResult.confirm(code).then((result) => {
        const dateToSend = date.getDate().toString() + " " + (date.getMonth() + 1).toString() + " " + date.getFullYear();
        dispatch(bookTable({ date: dateToSend, partySize, time, table, email: reservationData.email, name: reservationData.name }))
       
      }).catch((error) => {
        console.log(error)
        setProcessing(false);
        setError('wrong code entered!')
      });
    }
  }

  return (
    <>
      {!confirmationResult && !ReservationDataAfterBookingCompleted && <>
        <Title>Please Prove you are not a robot </Title>
        <Captcha id="recaptcha-container"></Captcha>
      </>}
      {confirmationResult && !ReservationDataAfterBookingCompleted && <>
        {loading && <Loader />}
        <Title>Verification Sms message was sent to your phone, please enter the code you received.</Title>
        <Input placeholder="Enter Verification Code" type="text" onChange={e => {
          setError('');
          setCode(e.target.value)
        }} />  
        {error && !ReservationDataAfterBookingCompleted && <Error>{error}</Error>}
        <Button disabled={!processing && code ? false : true} onClick={() => sendCode()} id="confirm-code">
          Book!
    </Button>
      </>}
    </>
  );
}

export default PhoneConformation;
