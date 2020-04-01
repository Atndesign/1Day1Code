import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
const IndexPage = () => (
  <div>
    <Header />
    <div className="container">
      <div className="row home__row">
        <div className="col-md-6">
          <img
            className="img-fluid home__illustration"
            src="./img/homeillustration.png"
            srcSet="./img/homeillustration.svg"
            alt="illustration"
          ></img>
        </div>
        <div className="col-md-6 home__content">
          <h1 className="home__title">Moulun Kevin</h1>
          <p className="home__subtitle">Web Developper</p>
          <Link className="btn home__btn" to="/projects/">
            Click me
          </Link>
        </div>
      </div>
    </div>
  </div>
)



export default IndexPage
