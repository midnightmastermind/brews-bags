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
          <div className="App-content">
              <div className="Page-header">Login</div>
              <div className="App-content-body">
              </div>
          </div>
        </div>
          )
    }
  }

export default LoginPage;