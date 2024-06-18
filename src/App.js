import React, { useState } from 'react';
import TrafficLight from './TrafficLight';
import './App.css';

const App = () => {
  const [isRunning, setIsRunning] = useState(false);

  const startLight = () => setIsRunning(true);
  const stopLight = () => setIsRunning(false);

  return (
    <div className="app">
      <h1>Traffic Light</h1>
      <div className="traffic-light-container">
        <TrafficLight isRunning={isRunning} />
        <br></br>
        <TrafficLight isRunning={isRunning} />
        <br/>
        <TrafficLight isRunning={isRunning} />
        <br/>
        <TrafficLight isRunning={isRunning} />
      </div>
      <div className="controls">
        <button onClick={startLight}>Start</button>
        <button onClick={stopLight}>Stop</button>
      </div>
    </div>
  );
};

export default App;
