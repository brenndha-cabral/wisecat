import React, { useContext } from 'react';
import handleAdviceAndCatImage from '../../helpers/handleAdviceAndCatImage';
import myContext from '../../contextAPI/myContext';
import './pageAdvices.css';

function Advices() {
  const { handleInfos, setHandleInfos } = useContext(myContext);

  return (
    <main>
      <button
        type="button"
        onClick={async () => {
          setHandleInfos(await handleAdviceAndCatImage());
        }}
      >
        Next advice
      </button>
      <div>
        <h1>{ handleInfos.advice }</h1>
        <img src={handleInfos.catImage} alt="Cat" />
      </div>
    </main>
  );
}

export default Advices;
