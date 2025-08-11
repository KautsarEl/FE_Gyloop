import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function Specification() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Price Specifications</h5>
        <Form>
          <Row className="g-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Base Price</Form.Label>
                <Form.Control type="number" placeholder="Enter base price" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Markup Percentage</Form.Label>
                <Form.Control type="number" placeholder="Enter markup percentage" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Tax Rate</Form.Label>
                <Form.Control type="number" placeholder="Enter tax rate" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Price Level</Form.Label>
                <Form.Select>
                  <option value="">Select price level</option>
                  <option value="premium">Premium</option>
                  <option value="standard">Standard</option>
                  <option value="economy">Economy</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
} 