import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/homepage/Home";
import { Route } from "react-router-dom";
import About from "./components/about/About";
import Paintings from "./components/paintings/Paintings";
import "./KBPortfolio.css";
import WorksOnPaper from "./components/worksonpaper/WorksOnPaper";

export default class ApplicationViews extends React.Component {
  state = {
    paintings: [
      {
        id: 1,
        Title: "Newlyweds." + "Oil on canvas. 4.5' x 4'",
        ImageURl:
          "https://res.cloudinary.com/dxeuwue7t/image/upload/v1559345413/bef055ba3cca138fb441085e51721079_d7sjgt.jpg"
      },
      {
        id: 2,
        Title: "Biannual Rendez - Vous." + "Oil on canvas. 6' x 4'",
        ImageURl:
          "https://res.cloudinary.com/dxeuwue7t/image/upload/v1559345414/2ad8670af757b23579215f56948f4984_galbhd.jpg"
      },
      {
        id: 3,
        Title: "P Holding Court." + "Oil on canvas. 2' x 3'",
        ImageURl:
          "https://res.cloudinary.com/dxeuwue7t/image/upload/v1559345411/ad5da0dfeae644d9d2ca78f2c8f60d6a_c8kkzr.jpg"
      },
      {
        id: 4,
        Title: "The Allegory of the Couch." + "Oil on canvas. 6' x 4'",
        ImageURl:
          "https://res.cloudinary.com/dxeuwue7t/image/upload/v1559345407/466ea772e838c2634b6a384081c40a5a_yhffe8.jpg"
      },
      {
        id: 5,
        Title: "Im Just Really Worried About Max." + "Oil on canvas. 3' x 4'",
        ImageURl:
          "https://res.cloudinary.com/dxeuwue7t/image/upload/v1559345416/c41e9fdc018c870fd0582cfaae0eabac_wd3mdo.jpg"
      },
      {
        id: 6,
        Title: '"Ava." Oil on canvas. 16" x 20"',
        ImageURl:
          "https://res.cloudinary.com/dxeuwue7t/image/upload/v1559345395/a07035c755665a8d1f7112a83e168ede_wm24zv.jpg"
      },
      {
        id: 7,
        Title: '"Mirror Self - Portrait." Oil on board. 6" x 8"',
        ImageURl:
          "https://res.cloudinary.com/dxeuwue7t/image/upload/v1559313792/KylePortait_gc6x1q.jpg"
      },
      {
        id: 8,
        Title: '"The Ballad of Young Oatmeal." Oil on canvas. 18" 24"',
        ImageURl:
          "https://res.cloudinary.com/dxeuwue7t/image/upload/v1559345409/3bf5bfeca9b711ba81c87acd261f294a_n48vt1.jpg"
      },
      {
        id: 9,
        Title: '"Big Cara." Oil on board. 14"8"',
        ImageURl:
          "https://res.cloudinary.com/dxeuwue7t/image/upload/v1559345402/af3e8c76624e7848fd6aba49d202c705_jswlhz.jpg"
      }
    ]
  };
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
            return <Paintings {...props} Paintings={this.state.paintings} />;
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
