import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class NavBar extends Component {
  render() {
    return (
      <div class="container h-10" id="content">
        <div class="row h-100 mt-5">
          <aside class="col-md-2">
            <div class="mt-5 mb-3" id="sidemenu">
              <ul class="nav flex-md-column flex-row justify-content-between">
                <li class="nav-item">
                  <Link
                    href="#sec1"
                    className="nav-link active pl-0"
                    to="/Home"
                  >
                    KYLE BAKER
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link pl-0" to="/Paintings">
                    Paintings
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link pl-0" to="/WorksOnPaper">
                    Works on Paper
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link pl-0" to="/About">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
