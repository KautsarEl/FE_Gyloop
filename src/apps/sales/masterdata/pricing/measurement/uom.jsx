import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function UOM() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Unit of Measure Pricing</h5>
        <Form>
          <Row className="g-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Base UOM</Form.Label>
                <Form.Select>
                  <option value="">Select base UOM</option>
                  <option value="piece">Piece</option>
                  <option value="unit">Unit</option>
                  <option value="package">Package</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Price per UOM</Form.Label>
                <Form.Control type="number" placeholder="Enter price per UOM" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Minimum Order UOM</Form.Label>
                <Form.Control type="number" placeholder="Enter minimum order" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Maximum Order UOM</Form.Label>
                <Form.Control type="number" placeholder="Enter maximum order" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Bulk Price UOM</Form.Label>
                <Form.Control type="number" placeholder="Enter bulk price" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Bulk Quantity UOM</Form.Label>
                <Form.Control type="number" placeholder="Enter bulk quantity" />
              </Form.Group>
            </Col>
            <Col sm="12">
              <Form.Group>
                <Form.Label>UOM Notes</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter UOM pricing notes" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
} 