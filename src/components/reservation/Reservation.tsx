import React, { useState } from "react";
import { ReservationSection, ReservationForm, ReservationTitle, ReservationSubTitle,ReservationSmall, FormInputWrapper, FormLabel, DatePickerInput, FormInput, IconWrapper, SubmitButton } from "./Reservation-style";
import * as BsIcons from 'react-icons/bs';
import * as HiIcons from 'react-icons/hi';
import moment from 'moment';
import { setReservationData } from "../../redux/actions/reservationActions";
import { useDispatch, useSelector } from 'react-redux';
import { ReservationData } from './../../redux/types/reservationTypes';
import { useHistory } from "react-router";

const Reservation = ({fromBookTablePage}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [date, setDate] = useState<any>(new Date());
  const [time, setTime] = useState<any>(moment().hours(12).minutes(0).toDate());
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [partySize, setPartySize] = useState<number>(0);
  const [name, setName] = useState<any>('');


  const handleDate = (date: any) => {
    setDate(date);
    // console.log(date.getDate(), date.getMonth() + 1, date.getFullYear());
  }
  const handleTimeDate = (date: any) => {
    setTime(date);
    // console.log(date.getHours()); 
  }

  const submitForm = (e) => {
    e.preventDefault();
    let reservationData: ReservationData = {
      date, name, email, phoneNumber, partySize, time: time.getHours()
    }
    dispatch(setReservationData(reservationData))
    history.push('/book-table')
  }


  return (
    <>
      <ReservationSection id="Reservation">
        <ReservationTitle fromBookTablePage={fromBookTablePage} className="title">RESERVATIONS</ReservationTitle>
        <ReservationSubTitle fromBookTablePage={fromBookTablePage} className="title">Book a table online. Confirmation will reach your email.</ReservationSubTitle>
        <ReservationSmall fromBookTablePage={fromBookTablePage}>* all fields are required</ReservationSmall>
        <br />
        <ReservationForm fromBookTablePage={fromBookTablePage} onSubmit={submitForm}>
          <FormInputWrapper>
            <FormLabel>Date:</FormLabel>
            <DatePickerInput
              required={true}
              dateFormat="dd/MM/yyyy"
              selected={date} onChange={handleDate} />
            <IconWrapper> <BsIcons.BsCalendar></BsIcons.BsCalendar></IconWrapper>
          </FormInputWrapper>
          <FormInputWrapper>
            <FormLabel>Name:</FormLabel>
            <FormInput required={true}  
              onChange={(e) => setName(e.target.value)} type="text"></FormInput>
            <IconWrapper> <HiIcons.HiPencilAlt></HiIcons.HiPencilAlt></IconWrapper>
          </FormInputWrapper>
          <FormInputWrapper>
            <FormLabel>Time:</FormLabel>
            <DatePickerInput
              required={true}

              selected={time}
              onChange={handleTimeDate}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              minTime={moment().hours(12).minutes(0).toDate()}
              maxTime={moment().hours(22).minutes(0).toDate()}
              timeCaption="Time"
              dateFormat="HH:mm"
              timeFormat="HH:mm"
            />
            <IconWrapper> <BsIcons.BsClock></BsIcons.BsClock></IconWrapper>
          </FormInputWrapper>
          <FormInputWrapper>
            <FormLabel>Email:</FormLabel>
            <FormInput required={true}
              onChange={(e) => setEmail(e.target.value)} type="email"></FormInput>
            <IconWrapper> <HiIcons.HiOutlineMail></HiIcons.HiOutlineMail></IconWrapper>
          </FormInputWrapper>
          <FormInputWrapper>
            <FormLabel>Number Of Guests:</FormLabel>
            <FormInput required={true}
              onChange={(e) => setPartySize(+e.target.value)} min={1} max={12} type="number"></FormInput>
            <IconWrapper> <BsIcons.BsFillPersonFill></BsIcons.BsFillPersonFill></IconWrapper>
          </FormInputWrapper>
          <FormInputWrapper>
            <FormLabel>Phone Number:</FormLabel>
            <FormInput required={true}
              onChange={(e) => setPhoneNumber(e.target.value)} type="text"></FormInput>
            <IconWrapper> <HiIcons.HiPhone></HiIcons.HiPhone></IconWrapper>
          </FormInputWrapper>
          <SubmitButton>Check Availability</SubmitButton>
        </ReservationForm>
      </ReservationSection>
    </>)
}

export default Reservation



