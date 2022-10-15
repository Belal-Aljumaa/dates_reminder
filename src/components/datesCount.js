import React from "react";
import { Row, Col } from "react-bootstrap";

const datesCount = ({ person }) => {
  return (
    <Row className="justify-content-center  my-2">
      <Col sm="8" className="fs-2">
        <p>
          You have <span>{person.length}</span> appointments :
        </p>
      </Col>
    </Row>
  );
};

export default datesCount;
