import styled from 'styled-components';

export const MessageContainer = styled.div<
{ error: boolean } >`
  background: ${({ error }) => (error ? '#DD4B39' : '#3B5998')};
  margin: 10px 15px 10px 5px;
  padding: 10px;
  display: flex;
  width: 25rem;
  top:20vh;
  position: fixed;
  align-items: center;
  font-size: 1.3rem;
  justify-content: center;
  z-index:10000;
  border-radius: 3px 3px 3px 3px;
  color: ${({ error }) => (error ? '#fff' : '#fff')};
  background-color: ${({ error }) => (error ? 'red' : 'green')};
  @media screen and (max-width: 868px) {
    width: 15rem;

  }
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes bounceInLeft {
  0%, 60%, 75%, 90%, 100% {
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
  opacity: 0;
  -webkit-transform: translate3d(-3000px, 0, 0);
  transform: translate3d(-3000px, 0, 0);
  }
  60% {
  opacity: 1;
  -webkit-transform: translate3d(25px, 0, 0);
  transform: translate3d(25px, 0, 0);
  }
  75% {
  -webkit-transform: translate3d(-10px, 0, 0);
  transform: translate3d(-10px, 0, 0);
  }
  90% {
  -webkit-transform: translate3d(5px, 0, 0);
  transform: translate3d(5px, 0, 0);
  }
  100% {
  -webkit-transform: none;
  transform: none;
  }
  }
  @keyframes bounceInLeft {
  0%, 60%, 75%, 90%, 100% {
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
  opacity: 0;
  -webkit-transform: translate3d(-3000px, 0, 0);
  transform: translate3d(-3000px, 0, 0);
  }
  60% {
  opacity: 1;
  -webkit-transform: translate3d(25px, 0, 0);
  transform: translate3d(25px, 0, 0);
  }
  75% {
  -webkit-transform: translate3d(-10px, 0, 0);
  transform: translate3d(-10px, 0, 0);
  }
  90% {
  -webkit-transform: translate3d(5px, 0, 0);
  transform: translate3d(5px, 0, 0);
  }
  100% {
  -webkit-transform: none;
  transform: none;
  }
`;
