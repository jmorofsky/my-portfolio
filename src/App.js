import React from 'react';
import './css/App.css';
import Header from './components/Header'
import AboutMe from './components/AboutMe'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
      </div>
    )
  }
}

export default App