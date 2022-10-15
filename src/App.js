import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import { person } from "./data";
import DatesCount from "./components/datesCount";
import DatesList from "./components/datesList";
import DatesAction from "./components/datesAction";

function App() {
  const [personData, setPersonData] = useState(person);
  //dafadf
  const onDelete = () => {
    setPersonData([]);
  };
  const onViewData = () => {
    setPersonData(person);
  };
  return (
    <div className="app">
      <Container className="py-5">
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesAction deleteData={onDelete} onViewData={onViewData} />
      </Container>
    </div>
  );
}

export default App;
