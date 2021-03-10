import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
`;
export const Captcha = styled.div`
// width:290px;

`;
export const Title = styled.h3`
  color: black;
  font-family: 'Imbue', serif;
  font-size: 1.3rem;
  margin-bottom: 20px;
  margin-right: 20px;
  text-align: center;
  padding: 10px;
  // background: black;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
export const DownArrow = styled.span`
  font-size:3rem;
  margin-left:5px;

`;
export const Error = styled.h3`
  color: red;
  font-family: 'Imbue', serif;
  font-size: 1.3rem;
  margin-bottom: 20px;
  margin-right: 20px;
  text-align: center;
  padding: 10px;
  // background: black;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const Input = styled.input`
  font-family: 'Imbue', serif;
  font-size: 1.6rem;
  margin-bottom: 10px;
  border:none;
  width:200px;
  margin-left:20px;
  margin-top:10px;
  @media screen and (max-width: 768px) {
    // font-size: 1rem;
  }
`;
export const Button = styled.button`
  font-family: 'Imbue', serif;
  font-size: 1.6rem;
  // padding: 10px 50px;
  margin-bottom: 20px;
  margin-left:20px;
  text-align: center;
  width:200px;
  cursor: pointer;
  background: rgb(231, 76, 20);
  :disabled {
    cursor: not-allowed;
  }

  @media screen and (max-width: 768px) {
    // font-size: 2rem;
  }
`;
