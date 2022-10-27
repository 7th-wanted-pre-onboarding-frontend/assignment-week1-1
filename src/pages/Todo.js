import React, { useState, useEffect } from 'react';
import TodoService from '../utils/Todo.service';
import ProtectedRoute from '../ProtectedRouter';
import TodoList from '../Components/TodoList';

function Todo() {
  const [todo, setTodo] = useState('');
  const [todoItemArray, setTodoItemArry] = useState([]);

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (todo !== '') {
      try {
        const res = await TodoService.create(todo);
        const newdata = res.data;
        setTodoItemArry((prev) => [...prev, newdata]);
        setTodo('');
      } catch (error) {
        alert(`${error?.message} || '문제가 발생했습니다`);
      }
    } else {
      alert('내용을 입력해주세요.');
    }
  };

  const getTodoList = async () => {
    const { data } = await TodoService.get();
    setTodoItemArry(data);
  };

  useEffect(() => {
    try {
      getTodoList();
    } catch (e) {
      alert('문제가 발생했습니다.');
    }
  }, []);

  return (
    <ProtectedRoute>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="할 일을 입력하세요."
            onChange={handleInput}
            value={todo}
          />
          <button type="submit">생성</button>
        </div>
        <TodoList todos={todoItemArray} getTodoList={getTodoList} />
      </form>
    </ProtectedRoute>
  );
}

export default Todo;
