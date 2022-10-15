import React from "react";
import { Row, Col } from "react-bootstrap";
const datesList = ({ person }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        <div className="box p-2">
          {person.length ? (
            person.map((item) => {
              return (
                <div
                  key={item.id}
                  className="d-flex border-bottom mx-3 my-2 p-2"
                >
                  <img src={item.img} alt="" />
                  <div className="px-3">
                    <p className="d-inline fs-5">{item.name}</p>
                    <p className="fs-6">{item.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="p-5 text-center">
              There are no appointments for today
            </h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default datesList;
