import React from 'react';
import Resume from './Resume'
import ProjectsContainer from './ProjectsContainer'
import LandingPage from './LandingPage'
import NavBar from './NavBar'
import './App.sass';

class App extends React.Component {

  state = {
    activeItem: "landing"
  }

  handlePageChange = (e) => {
    this.setState({
      activeItem: e.target.name
    })
  }

  renderComponent = (activeItem) => {
    switch (activeItem) {
      case "resume":
        return <Resume handlePageChange={this.handlePageChange}/>
      case "projects":
        return <ProjectsContainer/>
      default:
        return 0
        break;
    }
  }

  render() {
    return (
        this.state.activeItem === "landing" ?
        <div className="App">
          <LandingPage/>
        </div>
        :
        <div className="App">
          <NavBar handlePageChange={this.handlePageChange}/>
          {this.renderComponent(this.state.activeItem)}
        </div>
    );
  }
}

export default App;
