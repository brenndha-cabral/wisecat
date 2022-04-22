import React, { useContext } from 'react';
import myContext from '../../contextAPI/myContext';
import './pageAdvices.css';

function Advices() {
  const { advices } = useContext(myContext);

  return (
    <div>
      <h1>{ advices }</h1>
    </div>
  );
}

export default Advices;
