import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import { Link as LinkScroll } from 'react-scroll';
import Background from '../../images/hero2.jpg';

export const FormSection = styled.section`
  background-image: url(${Background});
  background-color: #666666;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${'' /* background-attachment: fixed; */}
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const FormContainer = styled.div`
  max-width:1160px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
export const Form = styled.form`
  max-width:1160px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
  ${'' /* border:4px solid white; */}

`;
export const FormTitle = styled.h1`
  font-family: 'Imbue', serif;
  font-size: 3rem;
  color:white;
  display: inline-block;
  border-bottom: 3px solid rgb(222, 141, 87, 0.7);
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0px;
  }
`;
export const FormSubTitle = styled.h4`
  font-family: 'Imbue', serif;
  font-size: 2rem;
  margin-top: 20px;
  margin-bottom: 20px;
  display: inline-block;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;
export const FormForm = styled.form`
  display: flex;
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
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: 45%;
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
