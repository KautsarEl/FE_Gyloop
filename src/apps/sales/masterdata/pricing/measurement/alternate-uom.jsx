import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function AlternateUOM() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Alternate UOM Pricing</h5>
        <Form>
          <Row className="g-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Alternate UOM</Form.Label>
                <Form.Select>
                  <option value="">Select alternate UOM</option>
                  <option value="box">Box</option>
                  <option value="carton">Carton</option>
                  <option value="pallet">Pallet</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Conversion Rate</Form.Label>
                <Form.Control type="number" placeholder="Enter conversion rate" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Alternate Price</Form.Label>
                <Form.Control type="number" placeholder="Enter alternate price" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Price Adjustment</Form.Label>
                <Form.Control type="number" placeholder="Enter price adjustment" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
} 