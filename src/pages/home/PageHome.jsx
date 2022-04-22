import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../../contextAPI/myContext';
import HandleAdvice from '../../helpers/handleAdvice';
import './pageHome.css';

function PageHome() {
  const { setAdvices } = useContext(myContext);
  const navigate = useNavigate();

  return (
    <main>
      <h1>
        Wise
        <span>Cat</span>
      </h1>
      <button
        type="button"
        onClick={async () => {
          setAdvices(await HandleAdvice());
          navigate('/advices');
        }}
      >
        Ask for advice
      </button>
    </main>
  );
}

export default PageHome;
