import styled from 'styled-components';


export const FooterSection= styled.footer`
  background-color:rgb(28,28,30);
  padding:20px;
  display:flex;
  align-items:center;
  justify-content:center;
`;
export const FooterDescription= styled.p`
  color: white;
  font-size:1.2rem;
  @media screen and (max-width: 768px) {
    font-size:0.9rem;
  }
`;