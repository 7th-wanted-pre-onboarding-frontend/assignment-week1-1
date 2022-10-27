import React, { useState, useEffect } from 'react';
import TodoItem from '../Components/TodoItem';
import todoApi from '../utils/CustomAxios';

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
        const res = await todoApi.createTodo(todo);
        const newdata = res.data;
        setTodoItemArry((prev) => [...prev, newdata]);
        setTodo('');
      } catch (error) {
        alert('문제가 발생했습니다.');
      }
    } else {
      alert('내용을 입력해주세요.');
    }
  };

  useEffect(() => {
    const getTodolist = async () => {
      const { data } = await todoApi.getTodos();
      setTodoItemArry(data);
    };

    try {
      getTodolist();
    } catch (e) {
      alert('문제가 발생했습니다.');
    }
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          id="todo"
          type="text"
          placeholder="할 일을 입력하세요."
          onChange={handleInput}
          value={todo}
        />
        <button type="submit">생성</button>
      </div>
      <div>
        {todoItemArray.map(({ id }) => (
          <TodoItem key={id} />
        ))}
      </div>
    </form>
  );
}

export default Todo;
