import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./ListEmployee.css";
import Employee from "./Employee";
import FetchHelper from "../../../common/fetch-helper";

export default function ListEmployee() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    FetchHelper.fetchData({
      url: "http://localhost:3000/employee",
      method: "GET",
    }).then(
      (jsonData) => {
        setEmployees(jsonData);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  console.log("Data : ", employees);

  if (employees) {
    var employee = employees.map((employee, index) => {
      return <Employee key={index} index={index} employee={employee} />;
    });
  }

  return (
    <div className="table-agile-info">
      <div className="panel panel-default">
        <h4>Tất cả người dùng</h4>
        <div class="add-product">
          <Link to="employye-add"> Thêm tài khoản</Link>
        </div>
        <div>
          <table
            className="table"
            ui-jq="footable"
            ui-options='{
          "paging": {
            "enabled": true
          },
          "filtering": {
            "enabled": true
          },
          "sorting": {
            "enabled": true
          }}'
          >
            <thead>
              <tr>
                <th data-breakpoints="xs">STT</th>
                <th>Tên nhân viên </th>
                <th>Ảnh</th>
                <th>Chức vụ</th>
                <th>Số điện thoại </th>
                <th>Email</th>
                <th data-breakpoints="xs sm md" data-title="DOB">
                  Cài đặt
                </th>
              </tr>
            </thead>
            <tbody>{employee}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
