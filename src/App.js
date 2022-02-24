import React from 'react';
import './App.css';
import Calculator from './Components/Calculator';
import Navbar from './Components/Navbar';
import SwitchState from './Context/SwitchState';

function App() {
  return (
    <div className="App">
      <SwitchState>
        <Navbar />
        <Calculator />
      </SwitchState>
    </div>
  );
}

export default App;
