import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

export default class NavBar extends Component {
  twitterClick = () => {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(document.title) +
        ":%20" +
        encodeURIComponent(document.URL)
    );
    return false;
  };

  tumblrClick = () => {
    "window.open('http://www.tumblr.com/share?v=3&u=' + encodeURIComponent(document.URL) + '&quote=' +  encodeURIComponent(document.title)); return false;";
  };

  render() {
    return (
      <div className="container h-10" id="content">
        <div className="row h-100 mt-5">
          <aside className="col-md-2">
            <div className="mt-5 mb-3" id="sidemenu">
              <ul className="nav flex-md-column flex-row justify-content-between">
                <li className="nav-item">
                  <Link
                    id="nav-link"
                    className="nav-link active pl-0 kyle-baker-link"
                    to="/Home"
                  >
                    KYLE BAKER
                  </Link>
                </li>
                <li className="nav-item">
                  <Link id="nav-link" className="nav-link pl-0" to="/Paintings">
                    Paintings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    id="nav-link"
                    className="nav-link pl-0"
                    to="/WorksOnPaper"
                  >
                    Works on Paper
                  </Link>
                </li>
                <li className="nav-item">
                  <Link id="nav-link" className="nav-link pl-0" to="/About">
                    About
                  </Link>
                </li>
              </ul>
              {/* instagram and share div */}
              <div className="ig-and-share-div">
                <a
                  href="https://www.instagram.com/kyle_baker_1993/"
                  target="blank"
                  className="ig-icon"
                >
                  <img
                    src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png"
                    width="20"
                    height="20"
                    alt="Instagram link"
                  />
                </a>

                <div className="dropdown">
                  <button className="dropbtn">Share</button>
                  <div className="dropdown-content">
                    <div
                      className="fb-share-button"
                      data-href="https://kylebakerart.com"
                      data-size="small"
                    >
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkylebakerart.com%2F&amp;src=sdkpreparse"
                        className="fb-xfbml-parse-ignore"
                      >
                        Facebook
                      </a>
                    </div>
                    <a
                      className="nav-link"
                      href="https://twitter.com/intent/tweet?source=http%3A%2F%2Fkylebakerart.com&text=:%20http%3A%2F%2Fkylebakerart.com"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="Tweet"
                      onClick={this.twitterClick}
                    >
                      Twitter
                    </a>
                    <a
                      className="nav-link"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.pinterest.com/pin/create/link/?url=www.kylebakerart.com"
                      data-pin-do="buttonBookmark"
                    >
                      Pinterest
                    </a>
                    <a
                      className="nav-link"
                      href="http://www.tumblr.com/share?v=3&u=http%3A%2F%2Fkylebakerart.com&quote=&s="
                      rel="noopener noreferrer"
                      target="_blank"
                      title="Post to Tumblr"
                      onClick={this.tumblrClick}
                    >
                      Tumblr
                    </a>
                  </div>
                </div>
              </div>
              <p className="copyright">Copyright @ All rights reserved</p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
