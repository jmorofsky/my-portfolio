import React from 'react';
import './css/App.css';
import './css/fonts.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Stats from './components/Stats'
import Skills from './components/Skills'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
        <Stats />
        <Skills />
      </div>
    )
  }
}

export default App