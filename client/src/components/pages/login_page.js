import React, { Component } from 'react';
//import Loading from './Loading';
//import PropTypes from 'prop-types';

class LoginPage extends Component {
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
        <div className="App-page Login-page">
          <div className="login-container">
            <div className="login-box">
              <div className="login-title">login</div>
              <div className="login-form"></div>
            </div>
          </div>
        </div>
          )
    }
  }

export default LoginPage;