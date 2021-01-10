import React, { Component } from "react";
import styleFooter from "./BTFooter.module.css";

export default class BTFooter extends Component {
  render() {
    return (
      <div className={styleFooter.container}>
        <span>Copyright © Your Website 2020</span>
      </div>
    );
  }
}
