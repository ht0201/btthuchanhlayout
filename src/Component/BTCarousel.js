import React, { Component } from "react";

export default class BTCarousel extends Component {
  render() {
    return (
      <div className="container d-flex p-5" style={{ backgroundColor: "#EEE" }}>
        <div className="carousel row">
          <h1>A Warm Welcome!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid
            similique quaerat nam nobis illo aspernatur vitae fugiat numquam
            repellat.
          </p>
          <button className="btn btn-primary">Call to action !</button>
        </div>
      </div>
    );
  }
}
