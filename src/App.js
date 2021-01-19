import React from 'react';
import './App.css';
import Cars from './Cars';
import TrafficSignal from './TrafficSignal';

import CarProvider from './context/CarProvider';
import SignalProvider from './context/SignalProvider';

function App() {
  return (
    <div className="container">
      <CarProvider>
        <Cars />
      </CarProvider>
      <SignalProvider>
        <TrafficSignal />
      </SignalProvider>
    </div>
  );
}

export default App;
