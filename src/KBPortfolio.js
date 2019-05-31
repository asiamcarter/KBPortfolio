import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews";
import "./KBPortfolio.css";

export default class KBPortfolio extends Component {
  state = {
    buttonClicked: false
  };

  buttonClicked = () => {
    this.setState({ buttonClicked: true });
  };

  pageRender = () => {
    if (this.state.buttonClicked !== true) {
      return (
        <div className="intro-background">
          <div className="intro-image-div">
            {/* <img
            src="https://res.cloudinary.com/dxeuwue7t/image/upload/v1559253675/c1b1704e0217b1d5fb2f8735719006a2_hoh0g6.png"
            alt="line drawing of artist Kyle Baker"
            className="intro-image"
          /> */}
            <div className="intro-text-div">
              <button className="intro-button" onClick={this.buttonClicked}>
                <h1 className="intro-text">KYLE BAKER</h1>
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return <ApplicationViews />;
    }
  };

  render() {
    return this.pageRender();
  }
}
