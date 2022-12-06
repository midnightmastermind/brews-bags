import React, { Component } from 'react';
import logo from '../../../assets/images/logo.png';
import { Link } from "react-router-dom";
//import PropTypes from 'prop-types';

class Header extends Component {
   constructor() {
      super();
    }

    render() {
      return (
        <div className="App-page App-header">
          <Link className="App-logo" to="/"><img src={logo} alt="logo" /></Link>
          <div className="App-header-menu">
			      <Link to="/home">home</Link>
            <Link to="/collection">collection</Link>
            <Link to="/connect">connect</Link>
          </div>
        </div>
          )
    }
  }

export default Header;