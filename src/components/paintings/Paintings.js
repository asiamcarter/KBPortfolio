import React from "react";
import PaintingCard from "./PaintingCard";
// import { Route } from "react-router-dom";

export default class Paintings extends React.Component {
  render() {
    return (
      <div>
        {this.props.Paintings.map(painting => (
          <PaintingCard key={painting.id} painting={painting} />
        ))}
      </div>
    );
  }
}
