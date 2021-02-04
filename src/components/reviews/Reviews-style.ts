import styled from 'styled-components';
import * as GoIcons from 'react-icons/go';
// import ReviewsBackground from '../../images/bestsellers-background.jpg';
import ReviewsBackground from '../../images/reviews-background.jpg';



export const ReviewsSection = styled.section`
  position: relative;
  background:black;
  &::before {
    content: '';
    background-image: url(${ReviewsBackground});
    // background-blend-mode: luminosity;
    ${'' /* background-blend-mode: multiply	; */}
    background-color: #666666;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    opacity:0.4;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    ${'' /* opacity: 0.75; */}
  }
`;

export const ReviewsTitle = styled.h1`
  font-size: 8rem;
  // display: inline-block;
  color:white;
  @media screen and (max-width: 768px) {
    font-size: 6.2rem;
  }
`;
export const ReviewsContainer = styled.div`
  max-width:1160px;
  margin:0 auto;
  display: flex;
  height:600px;
  position:relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background:red;
  padding:50px

`;



export const Slide =
  styled.div <
    { currentSlide: boolean } >
    `
  opacity: ${({ currentSlide }) => (currentSlide ? 1 : 0)};
  transition-duration: ${({ currentSlide }) =>
      currentSlide ? '3s' : '3s ease-in-out'};
  transform: ${({ currentSlide }) => (currentSlide ? 'scale(1.08)' : 'scale(1)')};
  max-width:90%;;
  // background:blue;
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;


export const ReviewDescription = styled.p`  
      font-family: 'Indie Flower', cursive;
      font-size:2.2rem;
      font-weight:bold;
      text-align: center;  
      color:white;
      @media screen and (max-width: 768px) {
        font-size: 1.2rem;
      }
`;
export const ReviewerNameAndLocation = styled.p`
      // margin-left:40px;
      // margin-top:40px;
      font-weight:bold;
      color:white;
      font-size:1.3rem;
      @media screen and (max-width: 768px) {
        font-size: 0.8rem;
      }

`;

export const ReviewerImage = styled.img`
  transition: all 0.3s;
  display: block;
  width: 150px;
  border-radius: 50%;
  margin:0 auto;
  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;


export const DotsContainer = styled.div`
// width:250px;
margin-top: 30px;
display:flex;
justify-content:space-between;
@media screen and (max-width: 768px) {
  // width: 150px;

  }
`;


export const Dot = styled(GoIcons.GoPrimitiveDot)<
{ current: number } >`
  width: 20px;
  height: 20px;
  color: ${({ current }) => (current ? 'white' : 'grey')};
  // color:white;
  cursor: pointer;

`;


