import './App.css';
import { Component } from 'react';
import Drawer from '../Components/Drawer/Drawer';
import Menu from '../Components/Menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Drawer />
        <Menu />
      </div>
    );
  }
}

export default App;
