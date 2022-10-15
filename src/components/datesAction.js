import React from "react";
import { Row, Col, Button } from "react-bootstrap";
const datesAction = ({ deleteData, onViewData }) => {
  return (
    <Row className="justify-content-center my-5">
      <Col sm="8" className="d-flex justify-content-between">
        <Button onClick={onViewData} className="btn btn-success p-2 fs-5">
          View All
        </Button>
        <Button onClick={deleteData} className="btn btn-danger p-2 fs-5">
          Delete All
        </Button>
      </Col>
    </Row>
  );
};

export default datesAction;
