import React, { Component } from 'react';
import home from '../../assets/images/home.jpg';
import description1 from '../../assets/images/description1.jpg';
import description2 from '../../assets/images/description2.jpg';
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
		              What it means to be a member of L.T.A. Records.

	A LYRICAL TATIC ASSASSIN uses their pen as a deadly weapon. Their voice is the spear that pierces the soul and touches the people. 

	The microphone is the dark path walked on by an assassin . Mostly used to kill emcees who lack the tactics to be great. It is better to fail in originality than to succeed in imitation. Opportunities are missed by most people because it is dressed in overalls and looks like work.
									</div>
									<img src={description1} />
								</div>
	              <div className="description description-odd">
				          <div className="description-text">LTA Records will lyrically speak on everyday problems that may or may not affect the everyday person, while teaching the masses as well as providing a versatile collection of music.
				          </div>
				          <img src={description2} />
			          </div>
              </div>
          </div>
        </div>
          )
    }
  }

export default HomePage;