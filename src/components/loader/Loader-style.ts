import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top:40%;
  text-align: center;
`;
export const LoadingSpinner = styled.div`
  width: 6rem;
  height: 6rem;
  display: inline-block;
  border: 3px solid black;
  border-radius: 50%;
  border-top-color: white;
  animation: 1s spin infinite ease-in-out;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
