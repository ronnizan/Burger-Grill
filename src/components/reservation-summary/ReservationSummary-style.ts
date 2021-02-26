import styled from 'styled-components';

export const ReservationSummaryTitle = styled.h1`
  color: white;
  font-family: 'Imbue', serif;
  font-size: 4.3rem;
  margin-bottom: 20px;
  margin-right: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 3.3rem;
  }
`;

export const ReservationSummarySummary = styled.div`
  background: white;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  border: 2px solid black;
`;
export const ReservationSummarySubTitle = styled.h3`
  color: black;
  font-family: 'Imbue', serif;
  font-size: 2.3rem;
  margin-bottom: 20px;
  margin-right: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const ReservationSummarySummaryDeatils = styled.p`
  padding: 10px;
  font-size: 1.2rem;
  width: 200px;
`;
