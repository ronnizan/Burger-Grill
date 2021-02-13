import styled from 'styled-components';


export const Captcha = styled.div`
`

export const Title = styled.h3`
color:white;
font-family: 'Imbue', serif;
font-size:2.3rem;
margin-bottom:20px;
margin-right: 20px;
text-align: center;
padding:10px;
background:black;

  @media screen and (max-width: 768px) {
    font-size:2rem;
  }
`;
export const Error = styled.h3`
color:red;
font-family: 'Imbue', serif;
font-size:2.3rem;
margin-bottom:20px;
margin-right: 20px;
text-align: center;
padding:10px;
background:black;
  @media screen and (max-width: 768px) {
    font-size:2rem;
  }  
`;
export const Input = styled.input`
// color:white;
font-family: 'Imbue', serif;
font-size:2.3rem;
margin-bottom:20px;
margin-right: 20px;
// text-align: center;

  @media screen and (max-width: 768px) {
    font-size:2rem;
  }
`;
export const Button = styled.button`
// color:white;
font-family: 'Imbue', serif;
font-size:2.3rem;
padding:10px;
margin-bottom:20px;
margin-right: 20px;
text-align: center;
cursor:pointer;
background:rgb(231,76,20);
:disabled{
  cursor:not-allowed;
}

  @media screen and (max-width: 768px) {
    font-size:2rem;
  }
`;