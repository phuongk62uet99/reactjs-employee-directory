import React, { useState, useEffect } from "react";
import { BrowserRouter as Link, useParams } from "react-router-dom";
import FetchHelper from "../../../common/fetch-helper";

export default function DepartmentEmployee() {
  const { id } = useParams();
  const [department, setDepartment] = useState([]);
  const [employees, setEmployees] = useState([]);
  const listEmployee = [];
  const check = false;
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
  employees.map((employee) => {
    if (employee.department_id._id === department._id) {
      listEmployee.push(employee);
    }
  });
  if (listEmployee.length > 0) {
    check = true;
  }
  var nv = listEmployee.map((employee, index) => {
    return (
      <tr data-expanded="true">
        <td>{index + 1}</td>
        <td>{employee.name} </td>
        <td>{employee.photo}</td>
        <td>{employee.jobtitle} </td>
        <th>{employee.cellphone}</th>
        <td>{employee.email}</td>
      </tr>
    );
  });

  return (
    <div className="table-agile-info">
      <div className="panel panel-default">
        <h4>Nhân viên ở phòng {department.name} </h4>

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
              </tr>
            </thead>
            <tbody>{nv}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
