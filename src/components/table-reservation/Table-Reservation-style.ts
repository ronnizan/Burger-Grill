import styled from 'styled-components';

export const TableContainer = styled.div`
  margin: 3%;
`;
export const TableWrapper =
  styled.div <
  { tableEmpty: boolean } >
  `
  background-color: rgba(245, 246, 250, 0.4);
  padding: 15px;
  border-radius: 25px;
  min-width: 80px;
  :hover{
    cursor: ${({ tableEmpty }) => (tableEmpty ? 'pointer' : 'default')};
  }
`;
export const TableRow = styled.div`
  margin-bottom: 8px;
  text-align: center;
`;
export const Chair =
  styled.span <
  { tableEmpty: boolean } >
  `
    background-color: ${({ tableEmpty }) => (tableEmpty ? 'white' : '#e74c3c')};
    border: solid 2px black;
    border-radius: 50%;
    padding: 1px 10px;
    margin: 3px;
`;
export const TableName = styled.p`
  color: white;
  font-size: 0.8rem;
  padding-top: 15px;
  font-family: Roboto, sans-serif;
`;
