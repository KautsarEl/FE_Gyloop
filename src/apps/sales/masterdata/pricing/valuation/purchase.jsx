import React from "react";
import { Form, Row, Col, Table } from "react-bootstrap";

export default function Purchase() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Purchase Price Valuation</h5>
        <Form>
          <Row className="g-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Supplier Type</Form.Label>
                <Form.Select>
                  <option value="">Select supplier type</option>
                  <option value="manufacturer">Manufacturer</option>
                  <option value="distributor">Distributor</option>
                  <option value="wholesaler">Wholesaler</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Purchase Volume</Form.Label>
                <Form.Select>
                  <option value="">Select volume</option>
                  <option value="small">Small (1-100)</option>
                  <option value="medium">Medium (101-1000)</option>
                  <option value="large">Large (1000+)</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div className="table-responsive mt-4">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Cost Component</th>
                  <th>Unit Cost</th>
                  <th>Quantity</th>
                  <th>Total Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Raw Material</td>
                  <td>
                    <Form.Control type="number" placeholder="Enter unit cost" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Enter quantity" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Total cost" disabled />
                  </td>
                </tr>
                <tr>
                  <td>Processing</td>
                  <td>
                    <Form.Control type="number" placeholder="Enter unit cost" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Enter quantity" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Total cost" disabled />
                  </td>
                </tr>
                <tr>
                  <td>Packaging</td>
                  <td>
                    <Form.Control type="number" placeholder="Enter unit cost" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Enter quantity" />
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
                <Form.Label>Supplier Terms</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter supplier terms" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Purchase Notes</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter purchase notes" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
} 