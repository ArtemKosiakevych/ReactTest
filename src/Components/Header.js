import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Header.css'
import logo from '../logo.svg';

export default class Header extends React.Component {
  state = {
    hover: false
  }

  onPress = () => {
    alert('')
  }

  onChange = (e) => {
    console.log(e.target.value)
  }

  onSearch = (text) => {
    console.log(text)
  }

  hoverOn = () => {
    this.setState({ hover: true })
  }

  hoverOff = () => {
    this.setState({ hover: false })
  }

  handleProfile = () => {
    alert('handleProfile')
  }

  handleSettings = () => {
    alert('handleSettings')
  }

  handleHome = () => {
    alert('handleHome')
  }

  renderProfileHover() {
    if (!this.state.hover) return
    return (
      <div className='profileHover'>
        <ul className='profileHoverList'>
          <li onClick={this.handleProfile} className={'profileHoverItem'}>
            <span className={'profileHoverText'}>Profile</span>
          </li>
          <hr className='separator' />
          <li onClick={this.handleSettings} className={'profileHoverItem'}>
            <span className={'profileHoverText'}>Settings</span>
          </li>
          <hr className='separator' />
          <li onClick={this.handleHome} className={'profileHoverItem'}>
            <span className={'profileHoverText'}>Home</span>
          </li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className='headerWrapper'>
        <div className='row'>
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className='headerTitle'>Simple React</h1>
        </div>
        <div className='headerLeft'>
          <img src={logo} className="app-logo" alt="logo" onClick={this.onPress} />
          <div className="searchBox">
            <input placeholder="Search for..." ref={input => this.search = input} className="searchInput" type='text' onChange={this.onChange} />
            <FontAwesomeIcon className="search" icon="search" />
          </div>
          <div
            className="profileWrapper"
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff} >
            <div
              className="profileBlock">
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