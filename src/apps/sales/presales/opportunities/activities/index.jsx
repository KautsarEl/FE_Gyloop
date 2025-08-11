import React from "react";
import { Table } from "react-bootstrap";

export default function Activities() {
  const columns = [];
  return (
    <>
      <div className="p-[20px]">
        <div className=" grid grid-cols-4 gap-[30px] mb-[30px]">
          <div className=" p-[16px] flex gap-[16px] rounded-[4px] shadow-xl items-start">
            <i className=" fars-calendar-star !text-[30px]"></i>
            <div className=" pt-[8px]">
              <h4 className=" m-0 p-0 text-[14px] font-bold">Activities</h4>
              <p className=" m-0 p-0 text-[12px] font-bold">5</p>
            </div>
          </div>
          <div className=" p-[16px] flex gap-[16px] rounded-[4px] shadow-xl items-start">
            <i className=" fars-clipboard-list-check !text-[30px]"></i>
            <div className=" pt-[8px]">
              <h4 className=" m-0 p-0 text-[14px] font-bold">Task</h4>
              <p className=" m-0 p-0 text-[12px] font-bold">5</p>
            </div>
          </div>
          <div className=" p-[16px] flex gap-[16px] rounded-[4px] shadow-xl items-start">
            <i className=" fars-circle-info !text-[30px]"></i>
            <div className=" pt-[8px]">
              <h4 className=" m-0 p-0 text-[14px] font-bold">Overdue</h4>
              <p className=" m-0 p-0 text-[12px] font-bold">5</p>
            </div>
          </div>
          <div className=" p-[16px] flex gap-[16px] rounded-[4px] shadow-xl items-start">
            <i className=" fars-file-pen !text-[30px]"></i>
            <div className=" pt-[8px]">
              <h4 className=" m-0 p-0 text-[14px] font-bold">Outstanding</h4>
              <p className=" m-0 p-0 text-[12px] font-bold">5</p>
            </div>
          </div>
        </div>
        <div className="scrollbar-custom">
          <Table responsive className="mb-0">
            <thead>
              <tr>
                <th scope="col">
                  <p style={{ minWidth: "max-content", margin: 0 }}>Stage</p>
                </th>
                <th scope="col">
                  <p style={{ minWidth: "max-content", margin: 0 }}>Activity</p>
                </th>
                <th scope="col">
                  <p style={{ minWidth: "max-content", margin: 0 }}>Task</p>
                </th>
                <th scope="col">
                  <p style={{ minWidth: "max-content", margin: 0 }}>Deadline</p>
                </th>
                <th scope="col">
                  <p style={{ minWidth: "max-content", margin: 0 }}> Status </p>
                </th>
                <th scope="col">
                  <p style={{ minWidth: "max-content", margin: 0 }}>
                    Complated Date
                  </p>
                </th>
                <th scope="col">
                  <p style={{ minWidth: "max-content", margin: 0 }}>Reminder</p>
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
                  <td colSpan={7} className="p-4 text-gray-500">
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
