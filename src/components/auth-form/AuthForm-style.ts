import styled from 'styled-components';
import * as GoIcons from 'react-icons/go';
import * as FaIcons from 'react-icons/fa';
import * as FcIcons from 'react-icons/fc';
import AuthFormBackground from '../../images/reviews-background.jpg';



export const AuthFormSection = styled.section`
padding-top:100px;
// background:lightgrey;
// height:100vh;
padding-bottom:220px;
background:url(${AuthFormBackground});
background-position: center;
background-repeat: no-repeat;
background-size: cover;

`;
export const AuthFormContainer = styled.div`
  max-width:1160px;
  margin:0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const Form =
  styled.form
    `
  display: flex;
  justify-content: center;
  align-items: center;
  color:white;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }  
  // margin-bottom:40px;
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes zoomIn {
  0% {
  opacity: 0;
  -webkit-transform: scale3d(.3, .3, .3);
  transform: scale3d(.3, .3, .3);
  }
  50% {
  opacity: 1;
  }
  }
  @keyframes zoomIn {
  0% {
  opacity: 0;
  -webkit-transform: scale3d(.3, .3, .3);
  transform: scale3d(.3, .3, .3);
  }
  50% {
  opacity: 1;
  }
`;
export const MainForm = styled.div`
display: flex;

flex-direction: column;
align-items: center;
background:white;
padding:20px 80px;
border-top-left-radius:30px;
border-bottom-left-radius:30px;
flex:0.3;
height:650px;
@media screen and (max-width: 768px) {
  height:450px;
  width:250px;
  border-top-left-radius:0;
border-bottom-left-radius:0;
order:1;
}  

`;
export const SideForm = styled.div`
display: flex;
align-items: center;
background:#98DCD3;
flex-direction: column;
padding:20px 80px;
border-top-right-radius:30px;
border-bottom-right-radius:30px;
flex:0.1;
height:650px;
@media screen and (max-width: 768px) {
  height:450px;
  width:250px;
  flex:1;
  border-top-right-radius:0;
border-bottom-right-radius:0;
}  

`;

export const AuthFormTitle = styled.h1<{ isSideForm: boolean }>`
color: ${({ isSideForm }) => (isSideForm ? 'white' : '#96DBE2')};
  font-size: 3rem;
  cursor:pointer;
  margin-top:30px;
  text-align:center;
  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }  
`;
export const IconsWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top:30px;

   
`;
export const FacebookIcon = styled(FaIcons.FaFacebookF)`
  font-size: 2.3rem;
  cursor:pointer;
  background:white;
  color:blue;
  border-radius:50%;
  border:1px solid lightgrey;
  padding:5px;
  margin-right:20px;
  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
    
  }
`;
export const GoogleIcon = styled(FcIcons.FcGoogle)`
  font-size: 2.3rem;
  cursor:pointer;
  border-radius:50%;
  border:1px solid lightgrey;
  padding:5px;
  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
    
  }
`;
export const SubTitle = styled.p`
  font-size: 1.1rem;
  margin-top:30px;
  color:grey;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    
  }
`;
export const Input = styled.input`
  font-size: 1.3rem;
  background-color:#EFEFEF;
  border:none;
  outline:none;
  padding:10px;
  margin-top:30px;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    
  }
`;
export const SubmitButton = styled.button`
  font-size: 1.3rem;
  background-color:rgb(150,219,226,0.7);
  border:none;
  color:white;
  outline:none;
  border-radius:50%;
  cursor: pointer;
  padding:15px; 
  margin-top:30px;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  :hover{  
    background-color:rgb(150,219,226);
  }
`;
export const SwitchButton = styled.button`
  font-size: 1.3rem;
  background-color:rgb(227,157,36,0.8);
  border:2px solid white;
  color:white;
  outline:none;
  border-radius:50%;
  cursor: pointer;
  padding:15px ;
  margin-top:30px;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  :hover{  
    background-color:rgb(227,157,36);
  }
`;
