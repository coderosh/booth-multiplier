import React from "react";
import styled from "styled-components";
import { Column } from "../utils/boothMultiplication";

interface TableProps {
  table: Column[];
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  padding: 10px;
  border: 2px solid black;
  font-size: 17px;
  overflow-x: auto;

  td,
  th {
    border: 1px solid #615353;
    padding: 10px;
    text-align: center;
  }

  th {
    border-bottom-width: 2px;
    font-weight: 500;
    font-size: 18px;
  }
`;

const Table: React.FC<TableProps> = (props) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>A</th>
          <th>Q</th>
          <th>
            Q<sub>-1</sub>
          </th>
          <th>M</th>
          <th>-M</th>
          <th>Count</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        {props.table.map((col) => (
          <tr>
            <td>{col.A}</td>
            <td>{col.Q}</td>
            <td>{col.Q1}</td>
            <td>{col.M}</td>
            <td>{col.minusM}</td>
            <td>{col.count}</td>
            <td>{col.remarks}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
