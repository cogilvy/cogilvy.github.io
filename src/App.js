import React from 'react';
import HomePage from './HomePage'
import ProjectsContainer from './ProjectsContainer'
import NavBar from './NavBar'
import './App.css';

class App extends React.Component {

  state = {
    activeItem: "home"
  }

  handlePageChange = (e) => {
    this.setState({
      activeItem: e.target.name
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar handlePageChange={this.handlePageChange}/>
        {
          this.state.activeItem === "home" ?
          <HomePage />
          :
          <ProjectsContainer />
        }
      </div>
    );
  }
}

export default App;
