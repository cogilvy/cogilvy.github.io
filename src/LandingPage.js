import React, { Component } from 'react';

class LandingPage extends Component {

  render() {
    return (
      <div>
        <video autoPlay muted loop id="myVideo" src="Ink.mp4"/>
        <div className="title-info">
          <img src="ChrisOgilvy.gif"/>
          <br/>
          <img style={{marginLeft: "6%"}} src="FullStackWebDevelop.png"/>
        </div>
      </div>
    );
  }

}

export default LandingPage;
