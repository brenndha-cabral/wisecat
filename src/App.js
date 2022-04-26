import React from 'react';
import Provider from './contextAPI/myProvider';
import RoutesCentral from './routes/RoutesCentral';

function App() {
  return (
    <Provider>
      <RoutesCentral />
    </Provider>
  );
}

export default App;
