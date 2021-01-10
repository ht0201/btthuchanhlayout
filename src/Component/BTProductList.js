import React, { Component } from "react";
import BTProduct from "./BTProduct";

export default class BTProductList extends Component {
  render() {
    return (
      <div className="container p-0">
        <div className="row">
          <div className="col-md-3">
            <BTProduct />
          </div>
          <div className="col-md-3">
            <BTProduct />
          </div>
          <div className="col-md-3">
            <BTProduct />
          </div>
          <div className="col-md-3">
            <BTProduct />
          </div>
        </div>
      </div>
    );
  }
}
