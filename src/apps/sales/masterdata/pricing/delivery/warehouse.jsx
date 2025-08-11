import React from "react";
import { Form, Row, Col, Table } from "react-bootstrap";

export default function Warehouse() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Warehouse Pricing</h5>
        <Form>
          <Row className="g-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Warehouse Location</Form.Label>
                <Form.Select>
                  <option value="">Select warehouse</option>
                  <option value="wh1">Warehouse 1</option>
                  <option value="wh2">Warehouse 2</option>
                  <option value="wh3">Warehouse 3</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Storage Type</Form.Label>
                <Form.Select>
                  <option value="">Select storage type</option>
                  <option value="standard">Standard Storage</option>
                  <option value="cold">Cold Storage</option>
                  <option value="hazmat">Hazmat Storage</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div className="table-responsive mt-4">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Storage Duration</th>
                  <th>Base Price</th>
                  <th>Additional Cost</th>
                  <th>Special Handling</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Daily Rate</td>
                  <td>
                    <Form.Control type="number" placeholder="Enter base price" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Enter additional cost" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Enter handling details" />
                  </td>
                </tr>
                <tr>
                  <td>Weekly Rate</td>
                  <td>
                    <Form.Control type="number" placeholder="Enter base price" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Enter additional cost" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Enter handling details" />
                  </td>
                </tr>
                <tr>
                  <td>Monthly Rate</td>
                  <td>
                    <Form.Control type="number" placeholder="Enter base price" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Enter additional cost" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Enter handling details" />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          <Row className="g-3 mt-3">
            <Col sm="12">
              <Form.Group>
                <Form.Label>Storage Notes</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter storage notes and special requirements" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
} 