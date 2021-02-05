import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./ListEmployee.css";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var id = 7;
    return (
      <tr data-expanded="true">
        <td>2</td>
        <td>Nguyễn văn Thái</td>
        <td>Ảnh</td>
        <td>Giám đốc </td>
        <th>0392483272</th>
        <td>NGuyễn Văn Phong99</td>
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
}

export default Employee;
