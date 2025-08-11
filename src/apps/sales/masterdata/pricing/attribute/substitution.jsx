import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function Substitution() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Price Substitutions</h5>
        <Form>
          <Row className="g-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Alternative Price</Form.Label>
                <Form.Control type="number" placeholder="Enter alternative price" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Substitution Type</Form.Label>
                <Form.Select>
                  <option value="">Select substitution type</option>
                  <option value="temporary">Temporary</option>
                  <option value="permanent">Permanent</option>
                  <option value="conditional">Conditional</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="12">
              <Form.Group>
                <Form.Label>Substitution Conditions</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter substitution conditions" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
} 