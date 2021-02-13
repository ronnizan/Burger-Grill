import React from "react";
import {TableContainer,TableWrapper,TableRow,Chair,TableName} from "./Table-Reservation-style";


const TableToDisplay = ({table,onTableSelected}) => {
 
  const getRow1 = () => {
    let chairs = [];
    for (let i = 0; i < Math.ceil(table.capacity / 2); i++) {
      chairs.push(
        <Chair
          key={i}
          tableEmpty={table.isAvailable}
        ></Chair>
      );
    }
    return chairs;
  };
  const getRow2 = () => {
    let chairs2 = [];
    for (let i = 0; i < Math.floor(table.capacity / 2); i++) {
      chairs2.push(
        <Chair
          key={i}
          tableEmpty={table.isAvailable}
        ></Chair>  
      );
    }
    return chairs2;
  };

  return (
    <TableContainer>
      <TableWrapper
        tableEmpty={table.isAvailable}
        onClick={() => {
          if (table.isAvailable) {
            onTableSelected(table);
          }
          
        }}
      > 
        <TableRow>
          
            {getRow1()}
        </TableRow>
        <TableRow >
            {getRow2()}
        </TableRow>

        <TableName>{table.name}, {table.location}</TableName>
      </TableWrapper>
    </TableContainer>
  );
};    

export default TableToDisplay;