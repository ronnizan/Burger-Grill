import styled from 'styled-components';


export const ProfileHero = styled.div`
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

export const ProfileTitle = styled.h2`
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

export const ProfileSection = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const NavContainer = styled.div`
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const NavItem =
  styled.div <
  { currentNavItem: boolean } >
  `
font-family: 'Imbue', serif;
font-size: 2rem;
border-bottom: ${({ currentNavItem }) =>
    currentNavItem ? '3px solid rgb(222, 141, 87, 0.7)' : 'none'};
margin: 0 10px;
color:black;
@media screen and (max-width: 768px) {
  font-size: 1.7rem;
}
@media screen and (max-width: 468px) {
  font-size: 1.2rem;
}
  cursor: pointer;
`;

export const CardsContainer = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid lightgrey;
  background: #ffffff;
  margin: 20px;
  min-height:350px;
  box-shadow: 0 2px 5px 0 rgba(3, 6, 26, 0.15);
`;
export const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;
export const CardOrderItemsRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const CardTitle = styled.h2`
  padding: 10px;
`;
export const CardLabel = styled.label`
  font-weight: bold;
`;
export const CardDescription = styled.span``;
export const OrderItemsDescription = styled.p`
  padding: 10px;
`;

export const DeleteAccountButton = styled.button`
  padding: 20px;
  background: rgb(255, 51, 51, 0.5);
  cursor: pointer;
  font-size: 1.3rem;
  &:hover {
    background: rgb(255, 51, 51, 1);
  }
`;
