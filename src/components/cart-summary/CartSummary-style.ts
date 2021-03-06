import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import { Link as LinkRouter } from 'react-router-dom';
// import CartSummaryBackground from '../../images/cart-summary-hero.jpg';

export const CartSummaryHero = styled.div`
  background-image: url('https://icecube-eu-287.icedrive.io/thumbnail?p=SePmIGXOMBXXx9AgfktGX5ipQtwzpDbCKwwN1YYGMU5ia8iiW2bcsLqnZBDSu08GfIRtDvA9P%2B19ICW2IHxOyhRa1O69kEiw3mNkSO%2BttvNbuyIdvYGQi8y9Pkkd50dm&w=1280&h=1280&m=cropped');
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
export const CartSummaryTitle = styled.h1`
  font-family: 'Imbue', serif;
  font-size: 5rem;
  display: inline-block;
  border-bottom: 3px solid rgb(222, 141, 87, 0.7);
  margin-bottom: 20px;
  color: white;
  position: relative;
  top: 80px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 3.8rem;
  }
`;
export const CartSummarySubTitle = styled.h3`
  font-family: 'Imbue', serif;
  font-size: 3.5rem;
  display: inline-block;
  text-align: center;
  border-bottom: 3px solid rgb(222, 141, 87, 0.7);
  margin-bottom: 20px;
  color: white;
  position: relative;
  top: 80px;

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
export const CartSummarySectionWrapper = styled.div`
  height: 100vh;
`;
export const CartSummarySection = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const CartSummaryTableAndTotalSummary = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const TotalSummary = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 1030px) {
    margin-left: 10px;
    order: 1;
  }
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
  width: 250px;
  font-weight: bold;
  background: white;

  @media screen and (max-width: 600px) {
    width: 140px;
  }
`;

export const CartSummaryTable = styled.table`
  max-width: 800px;
  margin: 20px auto;
  background: white;
  border: 0.5px solid lightgrey;
  flex: 0.5;
`;

export const CartSummaryTableHeader = styled.thead`
  background: black;
`;

export const CartSummaryTableRow = styled.tr``;

export const CartSummaryTableHeaderCell = styled.th`
  font-size: 1.3rem;
  color: white;
  padding: 20px;
  @media screen and (max-width: 768px) {
    padding: 10px;
    font-size: 1.2rem;
    padding: 10px;
  }
`;
export const CartSummaryTableBody = styled.tbody``;
export const CartSummaryTableBodyCell = styled.td`
  padding: 20px;
  border: 0.5px solid lightgrey;
  font-size: 1.4rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 10px;
    font-size: 1rem;
    padding: 0px;
  }
`;

export const CartSummaryItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
export const CartSummaryItemDescription = styled.p`
  font-size: 1rem;
  color: grey;
  padding: 5px;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const CloseIcon = styled(AiIcons.AiOutlineClose)`
  color: black;
  cursor: pointer;
`;
export const LinksContainer =
  styled.div <
  { isCartEmpty: boolean } >
  `
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 50px;
position:relative;
left: ${({ isCartEmpty }) => (isCartEmpty ? '0' : '350px')};
max-width:500px;
margin:0 auto;
@media screen and (max-width: 1068px) {
  left:0;
}

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

export const BackToOrderLink = styled(LinkRouter)`
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
