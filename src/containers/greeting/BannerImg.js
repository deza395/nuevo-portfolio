import React, { Component } from "react";
import banner from "./undraw_proud_coder_7ain.svg";

//para svg estaticos
class BannerImg extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <img
            src={banner}
            alt=""
            width="550"
            className="greeting-img-div-card"
          />
        </div>
      </div>
    );
  }
}
export default BannerImg;
