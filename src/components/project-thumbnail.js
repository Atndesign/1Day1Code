import React, { Component, Fragment } from "react"

class ThumbnailProject extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="project__thumbnail">
        <img
          className="img-fluid project-thumbnail__img"
          src={this.props.cover}
          alt={this.props.title}
        ></img>
        <p className="project-thumbnail__title">{this.props.title}</p>
        <a href={this.props.path} className="btn project-thumbnail__btn">
          View this project
        </a>
      </div>
    )
  }
}

export default ThumbnailProject
