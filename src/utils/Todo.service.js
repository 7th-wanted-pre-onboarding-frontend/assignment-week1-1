import client from './CustomAxios';

class TodosService {
  create(todo) {
    const body = { todo };
    return client.post('todos', body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  get() {
    return client.get('todos', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  update(id, payload) {
    return client.put(`todos/${id}`, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  delete(id) {
    return client.delete(`todos/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export default new TodosService();
