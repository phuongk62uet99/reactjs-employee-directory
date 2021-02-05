import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Department extends Component {
  render() {
    var id = 7;
    return (
      <tr data-breakpoints="xs">
        <td>1</td>
        <td>Phòng giám đốc </td>
        <td>0392483272</td>
        <td>Nguyễn Văn Phong</td>
        <td>
          <Link to={`/department-edit/${id}`}>
            <button
              data-toggle="tooltip"
              title="Edit"
              className="pd-setting-ed"
            >
              <i className="fa fa-pencil-square-o" aria-hidden="true">
                Edit
              </i>
            </button>
          </Link>
          <button data-toggle="tooltip" title="Trash" className="pd-setting-ed">
            <i className="fa fa-trash-o" aria-hidden="true">
              Chi tiết{" "}
            </i>
          </button>
          <button data-toggle="tooltip" title="Trash" className="pd-setting-ed">
            <i className="fa fa-trash-o" aria-hidden="true">
              Delete
            </i>
          </button>
        </td>
      </tr>
    );
  }
}

export default Department;
