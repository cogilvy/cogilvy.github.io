import React, { Component } from 'react';

class ProjectsContainer extends Component {

  //RECORD SCREEN WITH SHIFT+COMMAND+5

  render() {
    return (
      <div style={{marginTop: "5%"}} className="container">
        <div class="columns">
          <div class="column">
            <div style={{margin: "1vw"}} class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="Cryptopedia.png" alt="Placeholder image"/>
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h1 class="title is-3">Cryptopedia</h1>
                  <br></br>
                </div>
              </div>
              <footer class="card-footer">
                <a href="https://github.com/cogilvy/Cryptopedia-Client" class="card-footer-item">Github</a>
                <a href="#" class="card-footer-item">Video Demo</a>
              </footer>
            </div>
            <div style={{margin: "1vw"}} class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="Nba1K.png" alt="Placeholder image"/>
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h1 class="title is-3">NBA Game Simulator</h1>
                  <br></br>
                </div>
              </div>
              <footer class="card-footer">
                <a href="https://github.com/cogilvy/NBA-1K19" class="card-footer-item">Github</a>
                <a href="https://nba-1k19.herokuapp.com/" class="card-footer-item">Live Demo</a>
              </footer>
            </div>
          </div>
          <div class="column">
            <div style={{margin: "1vw"}} class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="CodingNetwork.png" alt="Placeholder image"/>
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h1 class="title is-3">The Coding Network</h1>
                  <br></br>
                </div>
              </div>
              <footer class="card-footer">
                <a href="https://github.com/cogilvy/Coding-Network-Client" class="card-footer-item">Github</a>
                <a href="https://coding-network.herokuapp.com/" class="card-footer-item">Live Demo</a>
              </footer>
            </div>
            <div style={{margin: "1vw"}} class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="Weather2.png" alt="Placeholder image"/>
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h1 class="title is-3">Weather Finder</h1>
                  <br></br>
                </div>
              </div>
              <footer class="card-footer">
                <a href="https://github.com/cogilvy/Coding-Network-Client" class="card-footer-item">Github</a>
                <a href="https://find-the-weather.herokuapp.com/" class="card-footer-item">Live Demo</a>
              </footer>
            </div>
          </div>
          <div class="column">
            <div style={{margin: "1vw"}} class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="Gentrif.png" alt="Placeholder image"/>
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h1 class="title is-3">Gentrification Heatmap</h1>
                  <br></br>
                </div>
              </div>
              <footer class="card-footer">
                <a href="https://github.com/cogilvy/Gentrification-HeatMap-Client" class="card-footer-item">Github</a>
                <a href="https://gentrification-map.firebaseapp.com/" class="card-footer-item">Live Demo</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ProjectsContainer;
