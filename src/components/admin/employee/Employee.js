import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./ListEmployee.css";
export default function Employee(props) {
  var employee = props.employee;
  console.log("EMployye : ", employee);
  var id = employee._id;
  return (
    <tr data-expanded="true">
      <td>{props.index + 1}</td>
      <td>{employee.name} </td>
      <td>{employee.photo}</td>
      <td>{employee.jobtitle} </td>
      <th>{employee.cellphone}</th>
      <td>{employee.email}</td>
      <td>{employee.department_id.name}</td>
      <td>
        <Link to={`/employee-edit/${id}`}>
          <button data-toggle="tooltip" title="Edit" class="pd-setting-ed">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </button>
        </Link>
        <button data-toggle="tooltip" title="Trash" class="pd-setting-ed">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
  );
}
