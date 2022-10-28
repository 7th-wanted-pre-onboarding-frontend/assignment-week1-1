import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Todo from './pages/Todo';

function Router() {
  return (
    <BrowserRouter basename='assignment-week1-1'>
      <Routes>
        <Route path='/'>
          <Route index element={<SignIn />} />
          <Route path='todo' element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
