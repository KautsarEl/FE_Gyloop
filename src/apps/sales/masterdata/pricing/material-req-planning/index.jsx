import React from "react";
import { Form, Row, Col, Table } from "react-bootstrap";

export default function MaterialReqPlanning() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Material Requirement Planning Pricing</h5>
        <Form>
          <Row className="g-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Planning Period</Form.Label>
                <Form.Select>
                  <option value="">Select period</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Material Category</Form.Label>
                <Form.Select>
                  <option value="">Select category</option>
                  <option value="raw">Raw Materials</option>
                  <option value="packaging">Packaging Materials</option>
                  <option value="components">Components</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div className="table-responsive mt-4">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Required Quantity</th>
                  <th>Unit Price</th>
                  <th>Total Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Control type="text" placeholder="Enter material name" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Enter quantity" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Enter unit price" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Total cost" disabled />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control type="text" placeholder="Enter material name" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Enter quantity" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Enter unit price" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Total cost" disabled />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          <Row className="g-3 mt-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Lead Time</Form.Label>
                <Form.Control type="number" placeholder="Enter lead time (days)" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Safety Stock</Form.Label>
                <Form.Control type="number" placeholder="Enter safety stock level" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Reorder Point</Form.Label>
                <Form.Control type="number" placeholder="Enter reorder point" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Economic Order Quantity</Form.Label>
                <Form.Control type="number" placeholder="Enter EOQ" />
              </Form.Group>
            </Col>
            <Col sm="12">
              <Form.Group>
                <Form.Label>Planning Notes</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter planning notes" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
} 