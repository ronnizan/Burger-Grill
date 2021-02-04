import React, { useState } from "react";
import { ReservationSection, ReservationForm, ReservationTitle, ReservationSubTitle, FormInputWrapper, FormLabel, DatePickerInput, FormInput, IconWrapper, SubmitButton } from "./Reservation-style";
import * as BsIcons from 'react-icons/bs';
import * as HiIcons from 'react-icons/hi';

const Reservation = () => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const [timeDate, setTimeDate] = useState<any>(new Date());
  // var tempDate = new Date(parseInt(startDate, 10));
  const handleDate = (date: any) => {
    setStartDate(date);
    console.log(date.getFullYear(), date.getMonth() + 1, date.getDate());
  }
    
  console.log(timeDate.toLocaleTimeString());
  
  return (
    <> 
      <ReservationSection id="Reservation">
        <ReservationTitle className="title">RESERVATIONS</ReservationTitle>
        <ReservationSubTitle className="title">Book a table online. Confirmation will reach your email.</ReservationSubTitle>
        <ReservationForm>

          <FormInputWrapper>
            <FormLabel>Date:</FormLabel>
            <DatePickerInput
              dateFormat="dd/MM/yyyy"
              selected={startDate} onChange={handleDate} />
            <IconWrapper> <BsIcons.BsCalendar></BsIcons.BsCalendar></IconWrapper>
          </FormInputWrapper>
          <FormInputWrapper>
            <FormLabel>Name:</FormLabel>
            <FormInput type="text"></FormInput>
            <IconWrapper> <HiIcons.HiPencilAlt></HiIcons.HiPencilAlt></IconWrapper>
          </FormInputWrapper>
          <FormInputWrapper>
            <FormLabel>Time:</FormLabel>
            <DatePickerInput
              selected={timeDate}
              onChange={date => setTimeDate(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="hh:mm aa"
            />
            <IconWrapper> <BsIcons.BsClock></BsIcons.BsClock></IconWrapper>
          </FormInputWrapper>
          <FormInputWrapper>
            <FormLabel>Email:</FormLabel>
            <FormInput type="email"></FormInput>
            <IconWrapper> <HiIcons.HiOutlineMail></HiIcons.HiOutlineMail></IconWrapper>
          </FormInputWrapper>
          <FormInputWrapper>
            <FormLabel>Guests:</FormLabel>
            <FormInput min={1} type="number"></FormInput>
            <IconWrapper> <BsIcons.BsFillPersonFill></BsIcons.BsFillPersonFill></IconWrapper>
          </FormInputWrapper>
          <FormInputWrapper>
            <FormLabel>Phone Number:</FormLabel>
            <FormInput type="text"></FormInput>
            <IconWrapper> <HiIcons.HiPhone></HiIcons.HiPhone></IconWrapper>
          </FormInputWrapper>
          <SubmitButton>Check Availability</SubmitButton>
        </ReservationForm>
      </ReservationSection>
    </>)
}

export default Reservation



