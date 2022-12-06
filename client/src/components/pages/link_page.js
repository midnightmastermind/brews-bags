import React, { Component } from 'react';

//import Loading from './Loading';

//import PropTypes from 'prop-types';

class LinkPage extends Component {
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
        <div className="App-page Link-page">
          <div className="App-content">
            
              <div className="App-content-body">
                <div className="Page-header">Connect with LTA</div>
          <div className="imgContainer">
            <img src="https://daynin.github.io/clojurescript-presentation/img/react-logo.png" className="reactLogo" alt=""/>
            <img src="http://pluspng.com/img-png/nodejs-png-javascript-node-js-nodejs-icon-download-png-512.png" className="nodeLogo" alt=""/>
            <img src="http://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png" className="sassLogo" alt=""/>
            <img src="https://jeremyrajan.gallerycdn.vsassets.io/extensions/jeremyrajan/webpack/2.0.0/1489299001844/Microsoft.VisualStudio.Services.Icons.Default" className="webpackLogo" alt=""/>
            <img src="https://raw.githubusercontent.com/babel/logo/master/babel.png" className="babelLogo" alt=""/>
          </div>
              </div>
          </div>
        </div>
      )
    }
  }

export default LinkPage;