import React, { useState } from 'react';
import CarContext from './CarContext';

function CarProvider({ children }) {
  const [cars, setCars] = useState({});

  const moveCar = (car, side) => {
    setCars((prevCars) => ({
      ...prevCars,
      [car]: side
    }));
  }

  return(
    <CarContext.Provider value={{ cars, moveCar }}>
      {children}
    </CarContext.Provider>
  );
}

export default CarProvider;
