import React, { Component } from 'react';
import home from '../../assets/images/home.jpg';
//import Loading from './Loading';
//import PropTypes from 'prop-types';

class HomePage extends Component {
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
        <div className="App-page Home-page">
          <div className="App-content">
              <div className="Page-header"><div className="image"></div><div className="header-title"></div></div>
              
              <div className="App-content-body">
	              <div className="description description-even">
		              <div className="description-text">
									</div>
									<img />
								</div>
	              <div className="description description-odd">
				          <div className="description-text">
				          </div>
				          <img />
			          </div>
              </div>
          </div>
        </div>
          )
    }
  }

export default HomePage;