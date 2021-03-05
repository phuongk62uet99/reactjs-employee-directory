import React, { useState, useEffect } from "react";
import { BrowserRouter as Link, useParams } from "react-router-dom";

import Department from "./Department";
import FetchHelper from "../../../common/fetch-helper";

export default function DepartmentDetail() {
  // const [departments, setDepartments] = useState([]);
  const { id } = useParams();
  const [department, setDepartment] = useState([]);
  const [employees, setEmployees] = useState([]);
  const listEmployee = [];
  var count = 0;
  useEffect(() => {
    FetchHelper.fetchData({
      url: "http://localhost:3000/department/" + id,
      method: "GET",
    }).then(
      (jsonData) => {
        setDepartment(jsonData);
      },
      (err) => {
        console.log(err);
      }
    );
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
  employees.map((employee, index) => {
    if (employee.department_id._id === department._id) {
      listEmployee.push(employee);
    }
  });
  count = listEmployee.length;
  console.log("count new : ", count);
  return (
    <div className="table-agile-info">
      <div className="panel panel-default">
        <h4>Thông tin của phòng {department.name} </h4>
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
                <th>Tên phòng ban</th>
                <th>Điện thọai văn phòng</th>
                <th>Giám đốc </th>
                <th>Tổng số nhân viên </th>
              </tr>
            </thead>
            <tbody>
              <tr data-expanded="true">
                <td>{department.name}</td>
                <td>{department.officephone}</td>
                <td>{department.manager}</td>
                <td>{count}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
