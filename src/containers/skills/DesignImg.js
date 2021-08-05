import React, { Component } from "react";
import data from "./img/design.svg";

class DesignImg extends Component {
  render() {
    return (
      <div className="App">
        <div className="container ">
          <img src={data} alt="" width="450" className="imgDesign" />
        </div>
      </div>
    );
  }
}

export default DesignImg;
