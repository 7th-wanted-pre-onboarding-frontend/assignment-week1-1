import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import SignIn from './pages/SignIn';
import Todo from './pages/Todo';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<SignIn />} />
      <Route path='todo' element={<Todo />} />
    </Route>
  )
);

export default Router;
