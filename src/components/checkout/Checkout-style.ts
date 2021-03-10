import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';


export const CheckoutHero = styled.div`
  background-image: url('https://icecube-eu-288.icedrive.io/thumbnail?p=1yw1XZ3gnxykePwVFST%2FGGNzqJAZl%2BVrOPkWzBtgrq0uwt%2FkOo1dmLD2Ke6guVNVKWVUOGrUhFmeg5ePDrWUWsbibTCOEVM1rjEa2mHdGX%2BbltAF8n%2F%2FvgAJkQxzcOAR&w=1280&h=1280&m=cropped');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 350px;
  }
`;
export const HeroTitle = styled.h1`
  font-family: 'Imbue', serif;
  font-size: 6rem;
  display: inline-block;
  border-bottom: 3px solid rgb(222, 141, 87, 0.7);
  margin-bottom: 20px;
  color: white;
  position: relative;
  top: 80px;
  @media screen and (max-width: 768px) {
    font-size: 3.8rem;
  }
`;

export const CheckoutTitle = styled.h2`
  font-family: 'Imbue', serif;
  font-size: 3.5rem;
  display: inline-block;
  text-align: center;
  width: 300px;
  margin: 20px auto;
  border-bottom: 3px solid rgb(222, 141, 87, 0.7);
  margin-bottom: 20px;
  color: black;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
export const CheckoutSubTitle = styled.h2`
  font-family: 'Imbue', serif;
  font-size: 2.5rem;
  display: inline-block;
  text-align: center;
  width: 300px;
  margin: 20px auto;
  color: black;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const CartIsEmptyTitle = styled.h2`
  font-family: 'Imbue', serif;
  font-size: 3.5rem;
  display: inline-block;
  text-align: center;
  width: 300px;
  margin: 20px auto;
  border-bottom: 3px solid rgb(222, 141, 87, 0.7);
  margin-bottom: 20px;
  color: black;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
export const CheckoutSectionWrapper = styled.div`
  height: 100vh;
`;
export const CheckoutSection = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FullNameWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const OrderFormLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;
export const OrderFormSelect = styled.select`
  padding: 10px;
  background: rgb(243, 241, 237);
  border: none;
  outline: none;
  font-size: 1rem;
  width: 30%;
  margin: 20px auto;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const OrderFormInput = styled.input`
  padding: 10px;
  background: rgb(243, 241, 237);
  border: none;
  outline: none;
  font-size: 1rem;
  width: 30%;
  margin: 20px auto;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const NameInput = styled.input`
  padding: 10px;
  background: rgb(243, 241, 237);
  border: none;
  outline: none;
  font-size: 1rem;
  width: 90%;
  margin: 20px auto;
`;

export const SmallDescription = styled.small`
  text-align: center;
  width: 50%;
  margin-bottom: 20px;
  align-self: center;
`;

export const TotalSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 10px;
  margin-bottom: 20px;
`;

export const TotalSummaryTitle = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;
export const TotalSummaryRow = styled.div`
  display: flex;
`;
export const TotalSummaryCell = styled.div`
  border: 1px solid grey;
  padding: 20px;
  width: 200px;
  @media screen and (max-width: 600px) {
    width: 140px;
    padding: 10px;
  }
`;

export const PaypalWrapper = styled.div`
  border: none;
  outline: none;
  width: 30%;
  margin: 20px auto;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`;

export const CheckoutLink = styled(LinkRouter)`
  color: white;
  background: #f9c56a;
  font-family: 'Imbue', serif;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid white;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  box-shadow: 0 2px 5px 0 rgba(3, 6, 26, 0.15);
  transition: 0.5s all ease-in-out;
  box-shadow: 0 0 0 0 white;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
    animation: none;
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const SaveOrderDetailsButton = styled.button`
  color: white;
  background: grey;
  font-family: 'Imbue', serif;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid white;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  box-shadow: 0 2px 5px 0 rgba(3, 6, 26, 0.15);
  transition: 0.5s all ease-in-out;
  box-shadow: 0 0 0 0 white;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
