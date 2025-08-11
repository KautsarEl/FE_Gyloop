import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function CustomFields() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Custom Fields</h5>
        <Form>
          <Row className="g-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Discount Type</Form.Label>
                <Form.Select>
                  <option value="">Select discount type</option>
                  <option value="percentage">Percentage</option>
                  <option value="fixed">Fixed Amount</option>
                  <option value="bulk">Bulk Discount</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Discount Value</Form.Label>
                <Form.Control type="number" placeholder="Enter discount value" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Minimum Order Quantity</Form.Label>
                <Form.Control type="number" placeholder="Enter minimum quantity" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Maximum Order Quantity</Form.Label>
                <Form.Control type="number" placeholder="Enter maximum quantity" />
              </Form.Group>
            </Col>
            <Col sm="12">
              <Form.Group>
                <Form.Label>Special Terms</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter special terms and conditions" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
} 