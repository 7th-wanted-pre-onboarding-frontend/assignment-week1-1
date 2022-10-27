import client from './CustomAxios';
import LocalStorageService from './LocalStorage.service';

class TodosService {
  create(todo) {
    const { value: accessToken } = LocalStorageService.get('token');
    const body = { todo };
    return client.post('todos', body, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
  }

  get() {
    const { value: accessToken } = LocalStorageService.get('token');
    return client.get('todos', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
  }

  update(id, payload) {
    const { value: accessToken } = LocalStorageService.get('token');
    return client.put(`todos/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
  }

  delete(id) {
    const { value: accessToken } = LocalStorageService.get('token');
    return client.delete(`todos/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
  }
}

export default new TodosService();
