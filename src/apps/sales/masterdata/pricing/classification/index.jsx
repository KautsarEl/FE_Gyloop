import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function Classification() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Price Classification</h5>
        <Form>
          <Row className="g-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Price Category</Form.Label>
                <Form.Select>
                  <option value="">Select category</option>
                  <option value="retail">Retail Price</option>
                  <option value="wholesale">Wholesale Price</option>
                  <option value="special">Special Price</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Price Group</Form.Label>
                <Form.Select>
                  <option value="">Select group</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                  <option value="discount">Discount</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Market Segment</Form.Label>
                <Form.Select>
                  <option value="">Select segment</option>
                  <option value="consumer">Consumer</option>
                  <option value="business">Business</option>
                  <option value="enterprise">Enterprise</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Price Tier</Form.Label>
                <Form.Select>
                  <option value="">Select tier</option>
                  <option value="basic">Basic</option>
                  <option value="advanced">Advanced</option>
                  <option value="premium">Premium</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="12">
              <Form.Group>
                <Form.Label>Classification Notes</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter classification notes" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
} 