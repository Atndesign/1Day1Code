import React, { Component } from "react"
import { Link } from "gatsby"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuLeft: -500,
    }
  }

  openSidebar = () => {
    this.setState({ menuLeft: 0 })
  }
  closeSidebar = () => {
    this.setState({ menuLeft: -500 })
  }

  render() {
    let dir = "https://atndesign.github.io/1Day1Code"
    return (
      <header className="header">
        <div
          style={{ left: +this.state.menuLeft + "px" }}
          className="sidebar mobile-only"
        >
          <button className="sidebar-cross" onClick={e => this.closeSidebar()}>
            <img
              srcSet={dir + "/img/cross.svg"}
              src={dir + "/img/cross.png"}
              alt="cross"
            />
          </button>
          <ul className="nav__list">
            <li className="list__item">
              <Link to="/">Home</Link>
            </li>
            <li className="list__item">
              <Link to="/projects/">Projects</Link>
            </li>
            <li className="list__item">
              <a
                target="_blank"
                rel="nooppener"
                href="https://kmoulun.gitlab.io/moulunkevin/"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button
          className="sidebar-toggler mobile-only"
          onClick={e => this.openSidebar()}
        >
          <img src={dir + "/img/menu.svg"} alt="menu toggler" />
        </button>
        <img
          srcset={dir + "/img/logo.svg"}
          src={dir + "/img/logo.png"}
          alt="logo"
          className="logo"
        />
        <nav className="header__nav desktop-only">
          <ul className="nav__list">
            <li className="list__item">
              <Link to="/">Home</Link>
            </li>
            <li className="list__item">
              <Link to="/projects/">Projects</Link>
            </li>
            <li className="list__item">
              <a target="_blank" href="https://kmoulun.gitlab.io/moulunkevin/">
                About me
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
