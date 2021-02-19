import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./ListDepartment.css";
import Department from "./Department";
import FetchHelper from "../../../common/fetch-helper";

export default function ListDepartments() {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    FetchHelper.fetchData({
      url: "http://localhost:3000/department",
      method: "GET",
    }).then(
      (jsonData) => {
        setDepartments(jsonData);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  const apiUpdateData = () => {
    FetchHelper.fetchData({
      url: "http://localhost:3000/department",
      method: "GET",
    }).then(
      (jsonData) => {
        setDepartments(jsonData);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  if (departments) {
    var department = departments.map((department, index) => {
      return (
        <Department
          key={index}
          index={index}
          department={department}
          apiUpdateData={apiUpdateData}
        />
      );
    });
  }
  return (
    <div className="table-agile-info">
      <div className="panel panel-default">
        <h4>Tất cả các phòng ban </h4>
        <Link className="add-product" to={`/department-add`}>
          <button data-toggle="tooltip" title="" className="pd-setting-ed">
            Thêm phòng ban mới
          </button>
        </Link>
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
                <th>Tên phòng ban</th>
                <th>Điện thọai văn phòng</th>
                <th>Giám đốc </th>
                <th>Xem chi tiết thông tin</th>
              </tr>
            </thead>
            <tbody>{department}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
