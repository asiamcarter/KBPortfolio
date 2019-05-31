import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/homepage/Home";
import { Route } from "react-router-dom";
import "./KBPortfolio.css";

export default class ApplicationViews extends React.Component {
  render() {
    return (
      <div className="applicationviews-div">
        <NavBar />
        <Route
          exact
          path="/home"
          render={props => {
            return <Home />;
          }}
        />
      </div>
    );
  }
}
