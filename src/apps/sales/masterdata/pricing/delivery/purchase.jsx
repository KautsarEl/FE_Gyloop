import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function Purchase() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Purchase Delivery Pricing</h5>
        <Form>
          <Row className="g-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Supplier Location</Form.Label>
                <Form.Select>
                  <option value="">Select supplier location</option>
                  <option value="local">Local</option>
                  <option value="international">International</option>
                  <option value="regional">Regional</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Shipping Method</Form.Label>
                <Form.Select>
                  <option value="">Select shipping method</option>
                  <option value="sea">Sea Freight</option>
                  <option value="air">Air Freight</option>
                  <option value="land">Land Transport</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Shipping Cost</Form.Label>
                <Form.Control type="number" placeholder="Enter shipping cost" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Insurance Cost</Form.Label>
                <Form.Control type="number" placeholder="Enter insurance cost" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
} 