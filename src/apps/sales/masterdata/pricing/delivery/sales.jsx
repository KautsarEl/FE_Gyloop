import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function Sales() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Sales Delivery Pricing</h5>
        <Form>
          <Row className="g-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Delivery Zone</Form.Label>
                <Form.Select>
                  <option value="">Select delivery zone</option>
                  <option value="zone1">Zone 1</option>
                  <option value="zone2">Zone 2</option>
                  <option value="zone3">Zone 3</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Delivery Method</Form.Label>
                <Form.Select>
                  <option value="">Select delivery method</option>
                  <option value="standard">Standard Delivery</option>
                  <option value="express">Express Delivery</option>
                  <option value="same-day">Same Day Delivery</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Base Delivery Price</Form.Label>
                <Form.Control type="number" placeholder="Enter base delivery price" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Additional Weight Price</Form.Label>
                <Form.Control type="number" placeholder="Enter price per additional kg" />
              </Form.Group>
            </Col>
            <Col sm="12">
              <Form.Group>
                <Form.Label>Special Instructions</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter special delivery instructions" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
}
