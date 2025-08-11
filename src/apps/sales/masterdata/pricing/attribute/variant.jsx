import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function Variant() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Price Variants</h5>
        <Form>
          <Row className="g-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Seasonal Price</Form.Label>
                <Form.Select>
                  <option value="">Select season</option>
                  <option value="regular">Regular Season</option>
                  <option value="peak">Peak Season</option>
                  <option value="off">Off Season</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Volume Price</Form.Label>
                <Form.Select>
                  <option value="">Select volume type</option>
                  <option value="retail">Retail</option>
                  <option value="bulk">Bulk</option>
                  <option value="wholesale">Wholesale</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Special Event Price</Form.Label>
                <Form.Control type="text" placeholder="Enter event name" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
} 