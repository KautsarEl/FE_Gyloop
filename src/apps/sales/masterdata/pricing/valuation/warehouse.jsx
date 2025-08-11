import React from "react";
import { Form, Row, Col, Table } from "react-bootstrap";

export default function Warehouse() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Warehouse Price Valuation</h5>
        <Form>
          <Row className="g-3">
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
            <Col sm="6">
              <Form.Group>
                <Form.Label>Duration Type</Form.Label>
                <Form.Select>
                  <option value="">Select duration</option>
                  <option value="short">Short Term (1-30 days)</option>
                  <option value="medium">Medium Term (1-6 months)</option>
                  <option value="long">Long Term (6+ months)</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div className="table-responsive mt-4">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Storage Component</th>
                  <th>Base Rate</th>
                  <th>Additional Charges</th>
                  <th>Total Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Space Rental</td>
                  <td>
                    <Form.Control type="number" placeholder="Enter base rate" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Enter charges" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Total rate" disabled />
                  </td>
                </tr>
                <tr>
                  <td>Handling</td>
                  <td>
                    <Form.Control type="number" placeholder="Enter base rate" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Enter charges" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Total rate" disabled />
                  </td>
                </tr>
                <tr>
                  <td>Insurance</td>
                  <td>
                    <Form.Control type="number" placeholder="Enter base rate" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Enter charges" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Total rate" disabled />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          <Row className="g-3 mt-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Special Requirements</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter special storage requirements" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Valuation Notes</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter valuation notes" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
} 