import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import YouTube, { YouTubeProps } from 'react-youtube';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

//import Loading from './Loading';

//import PropTypes from 'prop-types';

class CollectionPage extends Component {
   constructor() {
      super();

      this.state = {
  	    loading: true
      }
    }
   
_onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
    render() {
		//if (this.state.loading) {
			//return (<Loading />);
		//}
     const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

      return (
        <div className="App-page Collection-page">
          <div className="App-content">
              <div className="App-content-body">
	              <Carousel showArrows={true} >
		              <div><YouTube videoId="I31xOf6g3Hc" opts={opts} onReady={this._onReady} /></div>
		              <div><YouTube videoId="kKjiUdEAfIA" opts={opts} onReady={this._onReady} /></div>
									<div><YouTube videoId="Pdg-Y-dbzXw" opts={opts} onReady={this._onReady} /></div>
	              </Carousel>
              </div>
          </div>
        </div>
      )
    }
  }

export default CollectionPage;