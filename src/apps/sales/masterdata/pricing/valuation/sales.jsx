import React from "react";
import { Form, Row, Col, Table } from "react-bootstrap";

export default function Sales() {
  return (
    <React.Fragment>
      <div className="section-pricing">
        <h5>Sales Price Valuation</h5>
        <Form>
          <Row className="g-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Valuation Method</Form.Label>
                <Form.Select>
                  <option value="">Select method</option>
                  <option value="cost-plus">Cost Plus</option>
                  <option value="market-based">Market Based</option>
                  <option value="value-based">Value Based</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Price Point</Form.Label>
                <Form.Select>
                  <option value="">Select price point</option>
                  <option value="economy">Economy</option>
                  <option value="mid-range">Mid Range</option>
                  <option value="premium">Premium</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div className="table-responsive mt-4">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Base Value</th>
                  <th>Markup (%)</th>
                  <th>Final Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Base Cost</td>
                  <td>
                    <Form.Control type="number" placeholder="Enter base cost" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Enter markup %" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Final value" disabled />
                  </td>
                </tr>
                <tr>
                  <td>Overhead</td>
                  <td>
                    <Form.Control type="number" placeholder="Enter overhead cost" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Enter markup %" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Final value" disabled />
                  </td>
                </tr>
                <tr>
                  <td>Additional Costs</td>
                  <td>
                    <Form.Control type="number" placeholder="Enter additional costs" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Enter markup %" />
                  </td>
                  <td>
                    <Form.Control type="number" placeholder="Final value" disabled />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          <Row className="g-3 mt-3">
            <Col sm="6">
              <Form.Group>
                <Form.Label>Market Analysis</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter market analysis notes" />
              </Form.Group>
            </Col>
            <Col sm="6">
              <Form.Group>
                <Form.Label>Pricing Strategy</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter pricing strategy notes" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
} 