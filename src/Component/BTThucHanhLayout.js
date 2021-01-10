import React, { Component } from "react";
import BTCarousel from "./BTCarousel";
import BTFooter from "./BTFooter";
import BTHeader from "./BTHeader";
import BTProductList from "./BTProductList";

export default class BTThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <BTCarousel />
        <BTProductList />
        <BTFooter />
      </div>
    );
  }
}
