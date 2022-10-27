import axios from 'axios';

const client = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/'
});

client.interceptors.request.use((req) => {
  const accessToken = localStorage.getItem('token');
  if (accessToken && req.headers) {
    req.headers.authorization = `Bearer ${accessToken}`;
  }
  return req;
});

const todoApi = {
  /**
   * 회원가입
   * @param {string} email
   * @param {string} password
   */
  signUp: (email, password) => client.post('auth/signup', { email, password }),
  /**
   * 로그인
   * @param {string} email
   * @param {string} password
   */
  signIn: (email, password) => client.post('auth/signin', { email, password }),
  /**
   * 투두 생성
   * @param {object} todo
   */
  createTodo: (todo) => client.post('todos', { todo }),
  /**
   * 투두 리스트 get
   */
  getTodos: () => client.get('todos'),
  /**
   * 투두 update
   * @param {string} id
   * @param {string} todo
   * @param {boolean} isCompleted
   */
  updateTodo: (id, todo, isCompleted) =>
    client.put(`todos/${id}`, { todo, isCompleted }),
  /**
   * 투두 delete
   * @param {number} id
   */
  deleteTodo: (id) => client.delete(`todos/${id}`)
};
export default todoApi;
