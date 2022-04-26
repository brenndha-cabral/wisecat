import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function Provider({ children }) {
  const [handleInfos, setHandleInfos] = useState({
    advice: '',
    catImage: '',
  });

  const memoizedValue = useMemo(() => ({
    handleInfos, setHandleInfos,
  }), [handleInfos]);

  return (
    <myContext.Provider value={memoizedValue}>
      {children}
    </myContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
