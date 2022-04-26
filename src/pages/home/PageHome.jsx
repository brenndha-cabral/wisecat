import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../../contextAPI/myContext';
import handleAdviceAndCatImage from '../../helpers/handleAdviceAndCatImage';
import './pageHome.css';

function PageHome() {
  const { sethandleInfos } = useContext(myContext);
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
          sethandleInfos(await handleAdviceAndCatImage());
          navigate('/advices');
        }}
      >
        Ask for advice
      </button>
    </main>
  );
}

export default PageHome;
