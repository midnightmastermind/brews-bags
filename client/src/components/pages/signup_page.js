import React, { Component } from 'react';
//import Loading from './Loading';
//import PropTypes from 'prop-types';

class SignupPage extends Component {
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
        <div className="App-page Signup-page">
          <div className="signup-container">
            <div className="signup-box">
              <div className="signup-title">signup</div>
              <div className="signup-form"></div>
            </div>
          </div>
        </div>
          )
    }
  }

export default SignupPage;