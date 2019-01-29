import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import './Header.css'
import logo from '../logo.svg'

export default class Header extends React.Component {
  state = {
    hover: false,
  }

  onChange = e => {
    const handleSearch = this.props.handleSearch
    if (handleSearch) {
      handleSearch(e.target.value)
    }
  }

  hoverOn = () => {
    this.setState({ hover: true })
  }

  hoverOff = () => {
    this.setState({ hover: false })
  }

  renderProfileHover() {
    if (!this.state.hover) return
    return (
      <div className="profileHover">
        <ul className="profileHoverList">
          <li className={'profileHoverItem'}>
            <Link className={'profileHoverText'} to="/profile/">
              Profile
            </Link>
          </li>
          <hr className="separator" />
          <li className={'profileHoverItem'}>
            <Link className={'profileHoverText'} to="/settings/">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="headerWrapper">
        <div className="row">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="headerTitle">Simple React</h1>
        </div>
        <div className="headerLeft">
          <img
            src={logo}
            className="app-logo"
            alt="logo"
            onClick={this.onPress}
          />
          <div className="searchBox">
            <input
              placeholder="Search for..."
              ref={input => (this.search = input)}
              className="searchInput"
              type="text"
              onChange={this.onChange}
            />
            <FontAwesomeIcon className="search" icon="search" />
          </div>
          <div
            className="profileWrapper"
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}>
            <div className="profileBlock">
              <FontAwesomeIcon className="profile" icon="address-card" />
              <FontAwesomeIcon className="arrow" icon="sort-down" />
            </div>
            {this.renderProfileHover()}
          </div>
        </div>
      </div>
    )
  }
}
