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
    border-bottom-width: 4px;
    font-weight: 500;
    font-size: 18px;
  }

  .border-prev td {
    border-bottom-width: 4px;
  }

  .border-next td {
    border-top-width: 4px;
  }

  .border-top-down {
    border-bottom-width: 4px;
    border-top-width: 4px;
  }
`;

const Table: React.FC<TableProps> = (props) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {/* <th>Step</th> */}
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
        {props.table.map((col, i) => {
          const eqToNext = col.step === props.table[i + 1]?.step;
          const eqToPrev = col.step === props.table[i - 1]?.step;

          const trClassName = eqToPrev
            ? "border-prev"
            : eqToNext
            ? "border-next"
            : i === 0
            ? "border-prev"
            : "";

          return (
            <tr className={trClassName} key={`${col.step}-${col.count}`}>
              {/* {eqToNext ? (
                <td className="border-top-down" rowSpan={2}>
                  {col.step}
                </td>
              ) : eqToPrev ? null : (
                <td>{col.step}</td>
              )} */}

              <td>{col.A}</td>
              <td>{col.Q}</td>
              <td>{col.Q1}</td>
              <td>{col.M}</td>
              <td>{col.minusM}</td>
              <td>{col.count}</td>
              <td>{col.remarks}</td>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default Table;
