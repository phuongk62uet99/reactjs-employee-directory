import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="wthree-copyright">
          <p>
            Nguyen Van Phuong neww<a href="http://w3layouts.com">W3layouts</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
