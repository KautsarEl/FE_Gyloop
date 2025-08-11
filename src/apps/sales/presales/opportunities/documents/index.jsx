import React from "react";
import { Table } from "react-bootstrap";

export default function Documents() {
  const columns = [];
  return (
    <>
      <div className="p-[20px]">
        <div className="scrollbar-custom">
          <Table responsive className="mb-0">
            <thead>
              <tr>
                <th scope="col">
                  <p style={{ minWidth: "max-content", margin: 0 }}>
                    {" "}
                    Document No.{" "}
                  </p>
                </th>
                <th scope="col">
                  <p style={{ minWidth: "max-content", margin: 0 }}>
                    {" "}
                    Doc. Class{" "}
                  </p>
                </th>
                <th scope="col">
                  <p style={{ minWidth: "max-content", margin: 0 }}>
                    {" "}
                    Doc. Type{" "}
                  </p>
                </th>
                <th scope="col">
                  <p style={{ minWidth: "max-content", margin: 0 }}> Amount </p>
                </th>
                <th scope="col">
                  <p style={{ minWidth: "max-content", margin: 0 }}> Status </p>
                </th>
                <th scope="col">
                  <p style={{ minWidth: "max-content", margin: 0 }}>
                    {" "}
                    Submited Date{" "}
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {columns.length > 0 ? (
                columns.map((item, index) => (
                  <tr key={index}>
                    {Object.values(item).map((value, index) => (
                      <td>
                        {index === 0 ? (
                          value
                        ) : (
                          <p
                            className={
                              index === 0 ? " w-[30px]" : "value-table"
                            }
                          >
                            {value}
                          </p>
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-4 text-gray-500">
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
