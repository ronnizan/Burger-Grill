import styled from 'styled-components';
import * as GoIcons from 'react-icons/go';


export const ReviewsSection = styled.section`
  position: relative;
  background: black;
  &::before {
    content: '';
    background-image: url('https://icecube-eu-291.icedrive.io/thumbnail?p=ZUrNMMiF3JXRwVUUyfzlFvg5ecuWW7oahKmwNxBoigmfhSMXNUq6%2FPR9Uj2E%2F0XochOSc%2FT9CQV5aMiFyeanNPE7%2FQPHhxF%2FSwtvhwW8VHPpN87ivTxZidTUfic6X1cZ&w=1280&h=1280&m=cropped');
    background-color: #666666;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    opacity: 0.4;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const ReviewsTitle = styled.h1`
  font-size: 8rem;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 6.2rem;
  }
`;
export const ReviewsContainer = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  height: 600px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const Slide =
  styled.div <
  { currentSlide: boolean } >
  `
  opacity: ${({ currentSlide }) => (currentSlide ? 1 : 0)};
  transition-duration: ${({ currentSlide }) =>
    currentSlide ? '3s' : '3s ease-in-out'};
  transform: ${({ currentSlide }) =>
    currentSlide ? 'scale(1.08)' : 'scale(1)'};
  max-width:90%;;
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const ReviewDescription = styled.p`
  font-family: 'Indie Flower', cursive;
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const ReviewerNameAndLocation = styled.p`
  font-weight: bold;
  color: white;
  font-size: 1.3rem;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ReviewerImage = styled.img`
  transition: all 0.3s;
  display: block;
  width: 150px;
  border-radius: 50%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;

export const DotsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

export const Dot =
  styled(GoIcons.GoPrimitiveDot) <
  { current: number } >
  `
  width: 20px;
  height: 20px;
  color: ${({ current }) => (current ? 'white' : 'grey')};
  cursor: pointer;

`;
