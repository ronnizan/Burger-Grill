import React, { useEffect } from 'react';
import { ReservationSummaryTitle, ReservationSummarySubTitle, ReservationSummarySummary, ReservationSummarySummaryDeatils, } from './ReservationSummary-style';
import { useDispatch } from 'react-redux';
import { CLEAR_RESERVATION_DATA } from '../../redux/constants/reservationConstants';


const ReservationSummary = ({ reservationData }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_RESERVATION_DATA })

    }
  }, [])

  return (
    <>
      <ReservationSummaryTitle>Your Booking has Been completed!</ReservationSummaryTitle>
      <ReservationSummarySummary>
        <ReservationSummarySubTitle>Thank you {reservationData.name}</ReservationSummarySubTitle>
        <ReservationSummarySubTitle>an email with your booking confirmation has been sent to your email address</ReservationSummarySubTitle>
        <ReservationSummarySummaryDeatils>Date: {reservationData.date.split(" ").join("/")} </ReservationSummarySummaryDeatils>
        <ReservationSummarySummaryDeatils>Time: {reservationData.time}:00</ReservationSummarySummaryDeatils>
        <ReservationSummarySummaryDeatils>Guests:{reservationData.partySize}</ReservationSummarySummaryDeatils>
        <ReservationSummarySummaryDeatils>{reservationData.table.name}, {reservationData.table.location}</ReservationSummarySummaryDeatils>
      </ReservationSummarySummary>
    </>);
};

export default ReservationSummary;
