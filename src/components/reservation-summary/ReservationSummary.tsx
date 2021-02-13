import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { ReservationSummaryTitle, ReservationSummarySubTitle, ReservationSummarySummary, ReservationSummarySummaryDeatils, } from './ReservationSummary-style';
import { useDispatch, useSelector } from 'react-redux';


const ReservationSummary = ({ reservationData }) => {


  
  return (
    <>
      <ReservationSummaryTitle>Your Booking has Been completed!</ReservationSummaryTitle>
      <ReservationSummarySummary>
        <ReservationSummarySubTitle>Thank you {reservationData.name}</ReservationSummarySubTitle>
        <ReservationSummarySubTitle>an email with your booking confirmation has been sent to your email address</ReservationSummarySubTitle>
        {/* var n = str.replace("Microsoft", "W3Schools"); */}

        <ReservationSummarySummaryDeatils>Date: {reservationData.date.split(" ").join("/")  } </ReservationSummarySummaryDeatils>
        <ReservationSummarySummaryDeatils>Time: {reservationData.time}:00</ReservationSummarySummaryDeatils>
        <ReservationSummarySummaryDeatils>Guests:{reservationData.partySize}</ReservationSummarySummaryDeatils>
        <ReservationSummarySummaryDeatils>{reservationData.table.name}, {reservationData.table.location}</ReservationSummarySummaryDeatils>
      </ReservationSummarySummary>
    </>);
};

export default ReservationSummary;
