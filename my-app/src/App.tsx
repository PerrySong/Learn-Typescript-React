import React from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './Description';
import Header from './Header';


const App: React.FC = () => {
  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header name="REACT" />
        </header>
        <Description countBy={3} />
      </div>
  );
}

export default App;
