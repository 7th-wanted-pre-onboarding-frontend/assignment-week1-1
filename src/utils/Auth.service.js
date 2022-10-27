import client from './CustomAxios';
import LocalStorageService from './LocalStorage.service';

class AuthService {
  constructor() {
    this.accessToken = null;
    this.limitTime = 3600000;
  }

  login(body) {
    return client.post('auth/signin', body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  join(body) {
    return client.post('auth/signup', body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  isExpired(expiredTime) {
    const diff = Date.now() - expiredTime;
    if (diff > this.limitTime) {
      LocalStorageService.remove('token');
      return false;
    }
    return true;
  }
}

export default new AuthService();
