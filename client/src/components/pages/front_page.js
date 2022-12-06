import React, { Component } from 'react';
//import Loading from './Loading';
//import PropTypes from 'prop-types';
import cover from '../../assets/images/cover.jpg';
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
          <div className="cover-image">
						<img src={cover}  />
						<div className="welcome"><Link to="/home">welcome</Link></div>
          </div>
        </div>
          )
    }
  }

export default FrontPage;