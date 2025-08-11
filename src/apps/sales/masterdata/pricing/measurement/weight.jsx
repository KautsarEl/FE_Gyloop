import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function Weight() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Price Weights</h5>
        <Form>
          <Row className="g-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Market Weight</Form.Label>
                <Form.Control type="number" placeholder="Enter market weight (%)" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Cost Weight</Form.Label>
                <Form.Control type="number" placeholder="Enter cost weight (%)" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Competition Weight</Form.Label>
                <Form.Control type="number" placeholder="Enter competition weight (%)" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Demand Weight</Form.Label>
                <Form.Control type="number" placeholder="Enter demand weight (%)" />
              </Form.Group>
            </Col>
            <Col sm="12">
              <Form.Group>
                <Form.Label>Weight Notes</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter weight calculation notes" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
} 