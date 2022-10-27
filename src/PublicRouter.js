import React from 'react';
import { Navigate } from 'react-router-dom';
import useLogged from './utils/hooks/useLogged';

export default function PublicRoute({ children }) {
  const isLogged = useLogged();

  if (isLogged) {
    return <Navigate to="/todo" replace />;
  }

  return <>{children}</>;
}
