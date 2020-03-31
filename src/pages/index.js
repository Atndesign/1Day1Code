import React from "react"
import Header from "../components/header"
export default () => (
  <div>
    <Header />
    <div className="row">
      <div className="col-md-6">
        <img
          className="img-fluid"
          src="./img/homeillustration.png"
          srcSet="./img/homeillustration.svg"
          alt="illustration"
        ></img>
      </div>
    </div>
    <p>What a msitery.</p>
  </div>
)
