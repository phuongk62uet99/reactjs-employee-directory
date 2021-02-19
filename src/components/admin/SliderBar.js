import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import routes from "./routes/Routes";

class SliderBar extends Component {
  render() {
    return (
      <aside>
        <div id="sidebar" className="nav-collapse">
          <div className="leftside-navigation">
            <ul className="sidebar-menu" id="nav-accordion">
              <li>
                <a className="active" href="index.html">
                  <i className="fa fa-dashboard" />
                  <span>Trang chủ</span>
                </a>
              </li>
              <li className="sub-menu">
                <Link to="/departments">
                  <i className="fa fa-th" />
                  <span>Phòng ban</span>
                </Link>
                <ul className="sub">
                  <li>
                    <Link to="/departments">Tất phòng ban</Link>
                  </li>
                  <li>
                    <Link to="/department-edit">Chỉnh bộ phận </Link>
                  </li>
                  <li>
                    <Link to="/department-detail">Xem chi tiết</Link>
                  </li>
                </ul>
              </li>
              <li className="sub-menu">
                <a href="javascript:;">
                  <i className="fa fa-tasks" />
                  <span>Nhân Viên </span>
                </a>
                <ul className="sub">
                  <li>
                    <Link to="/employees">Tất cả nhân viên </Link>
                  </li>
                  <li>
                    <Link to="/employee-edit">Chỉnh sửa nhân viên </Link>
                  </li>
                  <li>
                    <Link to="/employee-detail">Chi tiết</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="login.html">
                  <i className="fa fa-user" />
                  <span>Login Page</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}

export default SliderBar;
