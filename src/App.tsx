import Table from "./components/Table";
import Container from "./components/Container";
import React from "react";
import boothMultiplication, { Column } from "./utils/boothMultiplication";
import Card from "./components/Card";
import Form from "./components/Form";
import Title from "./components/Title";

const App = () => {
  const [table, setTable] = React.useState<Column[]>([]);

  function onSubmit(multipicand: number, multiplier: number) {
    const table = boothMultiplication(multipicand, multiplier);
    setTable(table);
  }

  return (
    <Container>
      <Card>
        <Title>Booth Binary Multiplication</Title>
        <Form onSubmit={onSubmit} />
      </Card>
      <br />
      {table.length > 0 && (
        <Card style={{ overflowX: "auto" }}>
          <Table table={table} />
        </Card>
      )}
    </Container>
  );
};

export default App;
