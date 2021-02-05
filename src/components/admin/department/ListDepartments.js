import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./ListDepartment.css";
import Department from "./Department";

class ListDepartments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page_size: 20,
    };
  }
  componentDidMount() {
    var { page_size } = this.props;
  }
  render() {
    return (
      <div className="table-agile-info">
        <div className="panel panel-default">
          <h4>Tất cả các phòng ban </h4>
          <Link className="add-product" to="/department-add">
            thêm phòng ban
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
              <tbody>
                <Department></Department>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListDepartments;
