import React from 'react';
import './css/App.css';
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Stats from './components/Stats'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
        <Stats />
      </div>
    )
  }
}

export default App