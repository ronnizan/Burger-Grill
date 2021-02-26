import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const ReservationSection = styled.section`
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ReservationTitle =
  styled.h1 <
  { fromBookTablePage: boolean } >
  `
  font-family: 'Imbue', serif;
  font-size: 3rem;
  display: ${({ fromBookTablePage }) =>
    fromBookTablePage ? 'none' : 'inline-block'};
  border-bottom: 3px solid rgb(222, 141, 87, 0.7);
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0px;
  }
`;
export const ReservationSubTitle =
  styled.h4 <
  { fromBookTablePage: boolean } >
  `
  font-family: 'Imbue', serif;
  font-size: 2rem;
  margin-top: 20px;
  margin-bottom: 20px;
  display: ${({ fromBookTablePage }) =>
    fromBookTablePage ? 'none' : 'inline-block'};
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

export const ReservationSmall =
  styled.small <
  { fromBookTablePage: boolean } >
  `
 font-size:1rem;
 color: ${({ fromBookTablePage }) => (fromBookTablePage ? 'white' : 'black')};

`;
export const ReservationForm =
  styled.form <
  { fromBookTablePage: boolean } >
  `
  display: flex;
  background-color: white;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  padding: 30px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  @media screen and (max-width: 968px) {
    padding: 15px;
  }
`;
export const FormInputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
`;
export const FormLabel = styled.label`
  padding-bottom: 10px;
  font-weight: bold;
`;
export const DatePickerInput = styled(DatePicker)`
  cursor: pointer;
  width: 300px;
  height: 50px;
  padding: 10px;
  background-color: rgb(243, 241, 237);
  margin-right: 20px;
  outline: none;
  border: none;
  font-size: 1.2rem;
  margin-bottom: 20px;
  @media screen and (max-width: 968px) {
    width: 200px;
  }
`;

export const FormInput = styled.input`
  background-color: rgb(243, 241, 237);
  padding: 10px;
  width: 300px;
  height: 50px;
  margin-right: 20px;
  outline: none;
  border: none;
  font-size: 1.2rem;
  margin-bottom: 20px;
  @media screen and (max-width: 968px) {
    width: 200px;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: 35%;
  z-index: 200;
  right: 30px;
  color: orange;
`;
export const SubmitButton = styled.button`
  background-color: rgb(249, 197, 106, 0.7);
  padding: 10px;
  width: 300px;
  height: 50px;
  margin-right: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 20px;
  :hover {
    background-color: rgb(249, 197, 106);
  }
  @media screen and (max-width: 968px) {
    width: 200px;
  }
`;
