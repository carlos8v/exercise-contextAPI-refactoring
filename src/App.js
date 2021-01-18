import React from 'react';
import './App.css';
import Cars from './Cars';

import CarContext from './context/moveCarContext';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    };

    this.handleCarChange = this.handleCarChange.bind(this);
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

  render() {
    const { cars } = this.state;
    const carContextValue = {
      cars,
      moveCar: this.handleCarChange,
    };

    return (
      <>
        <CarContext.Provider value={carContextValue}>
          <Cars />
        </CarContext.Provider>
      </>
    );
  }
}

export default App;
