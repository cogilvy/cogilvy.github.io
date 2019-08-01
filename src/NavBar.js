import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class NavBar extends Component {

  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a name="home" onClick={this.props.handlePageChange} class="navbar-item">
              Home
            </a>

            <a name="projects" onClick={this.props.handlePageChange} class="navbar-item">
              Projects
            </a>

            <a name="resume" onClick={this.props.handlePageChange} class="navbar-item">
              Resume
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Links
              </a>
              <div class="navbar-dropdown">
                <a href="https://github.com/cogilvy" target="_blank" class="navbar-item">
                  Github
                </a>
                <a href="https://www.linkedin.com/in/chris-ogilvy-243976102/" target="_blank" class="navbar-item">
                  LinkedIn
                </a>
                <a href="https://medium.com/@chrisogilvy717" target="_blank" class="navbar-item">
                  Blog
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
          <div style={{textAlign: "right"}} class="column has-text-grey has-text-right-in-desktop">
            <p class="has-text-weight">
                Chris Ogilvy
            </p>
            <p class="has-text-weight">
                (619)-212-2553
            </p>
            <p class="has-text-weight">
                ogilvychris@outlook.com
            </p>
          </div>
          </div>
        </div>
      </nav>
    );
  }

}

export default NavBar;
