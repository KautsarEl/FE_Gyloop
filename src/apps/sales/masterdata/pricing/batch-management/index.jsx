import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function BatchManagement() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Batch Price Management</h5>
        <Form>
          <Row className="g-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Batch ID</Form.Label>
                <Form.Control type="text" placeholder="Enter batch ID" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Batch Size</Form.Label>
                <Form.Control type="number" placeholder="Enter batch size" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Batch Price</Form.Label>
                <Form.Control type="number" placeholder="Enter batch price" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Price Per Unit</Form.Label>
                <Form.Control type="number" placeholder="Enter price per unit" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Batch Status</Form.Label>
                <Form.Select>
                  <option value="">Select status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col sm="12">
              <Form.Group>
                <Form.Label>Batch Notes</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter batch notes" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
} 