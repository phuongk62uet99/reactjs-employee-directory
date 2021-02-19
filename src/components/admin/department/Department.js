import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Department(props) {
  const onDelteteDepartment = (id) => {
    fetch(`http://localhost:3000/department/` + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    props.apiUpdateData();
  };
  return (
    <tr data-breakpoints="xs">
      <td>{props.index + 1}</td>
      <td>{props.department.name} </td>
      <td>{props.department.officephone}</td>
      <td>{props.department.manager}</td>
      <td>
        <Link to={`/department-edit/${props.department._id}`}>
          <button data-toggle="tooltip" title="Edit" className="pd-setting-ed">
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
        <button
          data-toggle="tooltip"
          title="Trash"
          className="pd-setting-ed"
          onClick={() => onDelteteDepartment(props.department._id)}
        >
          <i className="fa fa-trash-o" aria-hidden="true">
            Delete
          </i>
        </button>
      </td>
    </tr>
  );
}
