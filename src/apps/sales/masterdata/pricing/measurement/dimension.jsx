import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function Dimension() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Price Dimensions</h5>
        <Form>
          <Row className="g-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Price Level</Form.Label>
                <Form.Select>
                  <option value="">Select price level</option>
                  <option value="basic">Basic</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Price Scale</Form.Label>
                <Form.Select>
                  <option value="">Select price scale</option>
                  <option value="retail">Retail</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="bulk">Bulk</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Price Range</Form.Label>
                <Form.Select>
                  <option value="">Select price range</option>
                  <option value="economy">Economy</option>
                  <option value="mid-range">Mid Range</option>
                  <option value="luxury">Luxury</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Price Tier</Form.Label>
                <Form.Select>
                  <option value="">Select price tier</option>
                  <option value="entry">Entry Level</option>
                  <option value="mid">Mid Level</option>
                  <option value="high">High End</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="12">
              <Form.Group>
                <Form.Label>Dimension Notes</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter dimension notes" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
} 