import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function Packaging() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Package Pricing</h5>
        <Form>
          <Row className="g-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Package Type</Form.Label>
                <Form.Select>
                  <option value="">Select package type</option>
                  <option value="basic">Basic Package</option>
                  <option value="standard">Standard Package</option>
                  <option value="premium">Premium Package</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Package Size</Form.Label>
                <Form.Select>
                  <option value="">Select package size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Base Price</Form.Label>
                <Form.Control type="number" placeholder="Enter base price" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Additional Services</Form.Label>
                <Form.Control type="number" placeholder="Enter additional cost" />
              </Form.Group>
            </Col>
            <Col sm="12">
              <Form.Group>
                <Form.Label>Package Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter package details" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
} 