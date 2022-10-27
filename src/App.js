import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Router from './Router';

function App() {
  const message = 'message';
  return (
    <div className="App">
      <h1>{message}</h1>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
