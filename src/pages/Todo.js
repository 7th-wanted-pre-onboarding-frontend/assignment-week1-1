import React from 'react';
import ProtectedRoute from '../ProtectedRouter';

function Todo() {
  return (
    <ProtectedRoute>
      <div>Todo</div>
    </ProtectedRoute>
  );
}

export default Todo;
