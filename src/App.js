import React from 'react';
import Provider from './contextAPI/myProvider';
import PageRoutes from './routes/PageRoutes';

function App() {
  return (
    <Provider>
      <PageRoutes />
    </Provider>
  );
}

export default App;
