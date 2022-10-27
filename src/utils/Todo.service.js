import axios from 'axios';
import LocalStorageService from './LocalStorage.service';

class TodosService {
  create(todo) {
    const { value: accessToken } = LocalStorageService.get('token');
    const body = { todo };
    return axios.post(
      'https://pre-onboarding-selection-task.shop/todos',
      body,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
  }

  get() {
    const { value: accessToken } = LocalStorageService.get('token');
    return axios.get('https://pre-onboarding-selection-task.shop/todos', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
  }

  update(id, payload) {
    const { value: accessToken } = LocalStorageService.get('token');
    return axios.put(
      `https://pre-onboarding-selection-task.shop/todos/${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
  }

  delete(id) {
    const { value: accessToken } = LocalStorageService.get('token');
    return axios.delete(
      `https://pre-onboarding-selection-task.shop/todos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
  }
}

export default new TodosService();
