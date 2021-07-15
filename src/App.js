import React from 'react';
import './css/App.css';
import './css/fonts.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Awards from './components/Awards';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
        <Stats />
        <Skills />
        <Awards />
      </div>
    )
  }
}

export default App