import React, { useState, useEffect } from 'react';
import './TrafficLight.css';

const TrafficLight = ({ isRunning }) => {
  const [state, setState] = useState('red');
  const [time, setTime] = useState(50);

  useEffect(() => {
    if (!isRunning) return;
    const intervals = {
      red: 50,
      yellow: 10,
      green: 60,
    };

    const nextState = {
      red: 'green',
      green: 'yellow',
      yellow: 'red',
    };

    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime === 1) {
          const newState = nextState[state];
          setState(newState);
          return intervals[newState];
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state, isRunning]);

  return (
    <div>
      <div className={`light red ${state === 'red' ? 'active' : ''}`}></div>
      <div className={`light yellow ${state === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light green ${state === 'green' ? 'active' : ''}`}></div>
      <div className="timer">{time}s</div>
    </div>
  );
};

export default TrafficLight;
