import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
class App extends Component {
  render() {
    return (      
 <div className="App">

    <div>
      <Home></Home>
    </div>
    </div>
    );
  }
}


export default App;
