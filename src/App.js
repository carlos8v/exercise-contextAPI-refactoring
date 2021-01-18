import React from 'react';
import './App.css';
import Cars from './Cars';
import TrafficSignal from './TrafficSignal';

import CarContext from './context/moveCarContext';
import SignalContext from './context/signalColorContext';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red',
      }
    };

    this.handleCarChange = this.handleCarChange.bind(this);
    this.handleSignalChange = this.handleSignalChange.bind(this);
  }

  handleCarChange(car, side) {
    const { cars: prevCars } = this.state;
    this.setState({
      cars: {
        ...prevCars,
        [car]: side,
      }
    });
  }

  handleSignalChange(color) {
    this.setState({
      signal: {
        color: color,
      }
    });
  }

  render() {
    const { cars, signal } = this.state;
    
    const carContextValue = {
      cars,
      moveCar: this.handleCarChange,
    };

    const signalContextValue = {
      signal,
      changeSignal: this.handleSignalChange,
    }

    return (
      <div className="container">
        <CarContext.Provider value={carContextValue}>
          <Cars />
        </CarContext.Provider>
        <SignalContext.Provider value={signalContextValue}>
          <TrafficSignal />
        </SignalContext.Provider>
      </div>
    );
  }
}

export default App;
