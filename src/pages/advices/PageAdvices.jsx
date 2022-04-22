import React, { useContext } from 'react';
import myContext from '../../contextAPI/myContext';
import handleAdvice from '../../helpers/handleAdvice';
import './pageAdvices.css';

function Advices() {
  const { advices, setAdvices } = useContext(myContext);

  return (
    <main>
      <button
        type="button"
        onClick={async () => {
          setAdvices(await handleAdvice());
        }}
      >
        Next advice
      </button>
      <h1>{ advices }</h1>
    </main>
  );
}

export default Advices;
