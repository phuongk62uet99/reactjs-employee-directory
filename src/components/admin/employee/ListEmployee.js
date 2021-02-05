import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./ListEmployee.css";
import Employee from "./Employee";

class ListEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
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
              <tbody>
                <Employee></Employee>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListEmployee;
