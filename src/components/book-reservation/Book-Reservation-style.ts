import styled from 'styled-components';
import * as GoIcons from 'react-icons/go';
import * as FaIcons from 'react-icons/fa';
import * as FcIcons from 'react-icons/fc';
import BookReservationBackground from '../../images/bestsellers-background.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// export const TopNavbarContainer = styled.div<
//   { scrollNav: boolean } >`
//   background: ${({ scrollNav }) => (scrollNav ? 'rgb(41,41,41)' : 'transparent')};
//   height: 80px;
//   display: flex;
//   transition: 1.3s all ease;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 1160px;
//   margin: 0 auto;
//   @media screen and (max-width: 768px) {
//     height: 120px;
//     // padding-top:20px;
//   }
// `;

export const BookReservationSection = styled.section`
padding-top:100px;
padding-bottom:50px;
// background:lightgrey;
min-height:100vh;
// padding-bottom:220px;
background:url(${BookReservationBackground});
background-position: center;
background-repeat: no-repeat;
background-size: cover;

`;
export const BookReservationContainer = styled.div`
  max-width:1360px;
  margin:0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background:rgb(255,255,255,0.6);
  // margin-top:200px;
  padding:50px;
`;
export const BookReservationTitle = styled.h1`
color:white;
font-family: 'Imbue', serif;
font-size:4.3rem;
margin-bottom:20px;
margin-right: 20px;
text-align: center;

  @media screen and (max-width: 768px) {
    font-size:3.3rem;
  }
`;

export const Form =
  styled.form
    `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // padding:200px;
`;
export const InputsWrapper =
  styled.div
    `
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;
export const DatePickerInput = styled(DatePicker)`
  cursor: pointer;
  width: 200px; 
  height: 50px;
  padding: 10px;
  color:white;
  background-color: rgb(231,76,20);
  margin-right: 20px;
  outline: none;
  border: none;
  font-size: 1.2rem;
  margin-bottom: 20px;
  @media screen and (max-width: 468px) {
    width: 200px;
    margin-right: 0px;
  }
`;
export const Input = styled.input`
  cursor: pointer;
  width: 200px; 
  height: 50px;
  padding: 10px;
  color:white;
  background-color: rgb(231,76,20);
  margin-right: 20px;
  outline: none;
  border: none;
  font-size: 1.2rem;
  margin-bottom: 20px;
  @media screen and (max-width: 468px) {
    width: 200px;
    margin-right: 0px;
  }
`;

export const FormSelect = styled.select`
  background-color: rgb(231,76,20);
  padding: 10px;
  color:white;
  cursor: pointer;
  width: 200px;
  height: 50px;
  margin-right: 20px;
  outline: none;
  border: none;
  font-size: 1.2rem;
  margin-bottom: 20px;
  @media screen and (max-width: 468px) {
    width: 200px;
    margin-right: 0px;

  }
}
`;
export const FormSelectOption = styled.option`
  background-color: white;
  color:black;
  cursor: pointer;
}
`;
export const TablesContainer =
  styled.div
    `
    display: flex;
    width:100%;
    // min-width:880px;
    justify-content: center;
    background:rgb(231,76,20,0.8);
    align-items: center;
    flex-wrap: wrap;
    position:relative;
`;
export const ChairSymbolWrapper = styled.div`
  display:flex;
  // flex-direction: column;
  // justify-content: center;
  align-items: center;
  width:100%;

`;
export const ChairSymbolLabel = styled.label`
  color:white;
  // margin-left:10px;
  padding: 5px;

`;
export const ChairSymbol = styled.span<
  { tableEmpty: boolean } >`
    background-color: ${({ tableEmpty }) => (tableEmpty ? "white" : "#e74c3c")};
    border: solid 2px black;
    border-radius: 50%;
    padding: 15px;
    margin: 13px;
    position:relative;
    // bottom:100px;
`;