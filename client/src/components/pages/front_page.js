import React, { Component } from 'react';
//import Loading from './Loading';
//import PropTypes from 'prop-types';


import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";

class FrontPage extends Component {
   constructor() {
      super();

      this.state = {
  	    loading: true
      }
    }

    render() {
		//if (this.state.loading) {
			//return (<Loading />);
		//}

      return (
        <div className="App-page Front-page">
          <div className="cover-container">
						<div className="welcome">
              <Link className="title" to="/home">Brews Bags</Link>
              <img className="welcome-logo" src={logo} />
              <div className="user-actions">
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
          )
    }
  }

export default FrontPage;
