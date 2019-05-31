import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/homepage/Home";
import { Route } from "react-router-dom";
import About from "./components/about/About";
import Paintings from "./components/paintings/Paintings";
import "./KBPortfolio.css";
import WorksOnPaper from "./components/worksonpaper/WorksOnPaper";

export default class ApplicationViews extends React.Component {
  render() {
    return (
      <div className="applicationviews-div">
        <NavBar />
        <Route
          exact
          path="/Home"
          render={props => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/About"
          render={props => {
            return <About />;
          }}
        />
        <Route
          exact
          path="/Paintings"
          render={props => {
            return <Paintings />;
          }}
        />
        <Route
          exact
          path="/WorksOnPaper"
          render={props => {
            return <WorksOnPaper />;
          }}
        />
      </div>
    );
  }
}
