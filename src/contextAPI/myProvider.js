import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function Provider({ children }) {
  const [advices, setAdvices] = useState('');

  const [catsPictures, setCatsPictures] = useState('');

  const memoizedValue = useMemo(() => ({
    advices, setAdvices, catsPictures, setCatsPictures,
  }), [advices, catsPictures]);

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
