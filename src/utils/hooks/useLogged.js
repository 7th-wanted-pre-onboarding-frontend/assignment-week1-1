import { useMemo } from 'react';
import AuthService from '../Auth.service';
import LocalStorageService from '../LocalStorage.service';

export default function useLogged() {
  const token = LocalStorageService.get('token');
  const isLogged = useMemo(() => {
    if (token && token.value) {
      return AuthService.isExpired(token.expiredTime);
    }

    return false;
  }, [token]);

  return isLogged;
}
