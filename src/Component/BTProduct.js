import React, { Component } from "react";

export default class BTProduct extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://picsum.photos/500/300"
            alt="Card2"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div
            className="list-group list-group-flush "
            style={{ backgroundColor: "#DDD" }}
          >
            <li className="list-group-item text-center">
              <button className="btn btn-primary">Find Out More !</button>
            </li>
          </div>
        </div>

        {/* <div className="card text-left">
          <img
            className="card-img-top"
            src="https://picsum.photos/500/300"
            alt="acv"
          />
          <div className="card-body">
            <h4 className="card-title text-center">Card title</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              esse necessitatibus neque.
            </p>
          </div>
          <button
            className="btn btn-primary"
            style={{ width: "150px", margin: "0 auto" }}
          >
            Find Out More!
          </button>
        </div> */}
      </div>
    );
  }
}
