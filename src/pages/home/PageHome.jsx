import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../../contextAPI/myContext';
import { requestAdvices } from '../../services/requestAPIs';
import './pageHome.css';

function PageHome() {
  const navigate = useNavigate();

  const { setAdvices } = useContext(myContext);

  const handleAdvice = async () => {
    const advice = await requestAdvices();

    setAdvices(advice);
  };

  return (
    <div>
      <h1>
        Wise
        <span>Cat</span>
      </h1>
      <button
        type="button"
        onClick={() => {
          handleAdvice();
          navigate('/advices');
        }}
      >
        Ask for advice
      </button>
    </div>
  );
}

export default PageHome;
