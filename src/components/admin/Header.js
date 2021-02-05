import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header fixed-top clearfix">
        <div className="brand">
          <a href="index.html" className="logo">
            Admin
          </a>
          <div className="sidebar-toggle-box">
            <div className="fa fa-bars" />
          </div>
        </div>
        <div className="top-nav clearfix">
          <ul className="nav pull-right top-menu">
            <li>
              <input
                type="text"
                className="form-control search"
                placeholder=" Search"
              />
            </li>
            <li className="dropdown">
              <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <img alt="" src="public/asset/images/2.png" />
                <span className="username">Phương ADMIN</span>
                <b className="caret" />
              </a>
              <ul className="dropdown-menu extended logout">
                <li>
                  <a href="#">
                    <i className=" fa fa-suitcase" />
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-cog" /> Settings
                  </a>
                </li>
                <li>
                  <a href="login.html">
                    <i className="fa fa-key" /> Log Out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
