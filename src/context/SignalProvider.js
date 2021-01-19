import React, { useState } from 'react';

import SignalContext from './SignalContext';

function SignalProvider({ children }) {
  const [signal, setSignal] = useState({ color: 'red' });

  const changeSignal = (color) => {
    setSignal({ color });
  }

  return(
    <SignalContext.Provider value={{ signal, changeSignal }}>
      {children}
    </SignalContext.Provider>
  );
}

export default SignalProvider;
