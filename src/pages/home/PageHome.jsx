import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../../contextAPI/myContext';
import './pageHome.css';

function PageHome() {
  const navigate = useNavigate();

  const { setAdvices } = useContext(myContext);

  return (
    <div>
      <h1>
        Wise
        <span>Cat</span>
      </h1>
      <button
        type="button"
        onClick={() => {
          setAdvices();
          navigate('/advices');
        }}
      >
        Ask for advice
      </button>
    </div>
  );
}

export default PageHome;
