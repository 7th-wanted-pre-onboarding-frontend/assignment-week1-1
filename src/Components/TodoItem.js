import React, { useCallback, useState } from 'react';

import TodoService from '../utils/Todo.service';

export default function TodoItem({ todo, getTodoList }) {
  const [editMode, setEditMode] = useState(false);
  const [todoValue, setTodoValue] = useState(todo.todo);

  const handleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const handleTodoValue = ({ target: { value } }) => {
    setTodoValue(value);
  };

  const onComplete = useCallback(async () => {
    try {
      await TodoService.update(todo.id, {
        isCompleted: !todo.isCompleted,
        todo: todo.todo
      });
      getTodoList();
    } catch (e) {
      console.error(e);
    }
  }, [todo]);

  const onUpdate = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        await TodoService.update(todo.id, {
          isCompleted: todo.isCompleted,
          todo: todoValue
        });
        getTodoList();
        handleEditMode();
      } catch (error) {
        console.error(error);
      }
    },
    [todo, todoValue]
  );

  const onDelete = useCallback(async () => {
    if (!window.confirm('정말로 삭제하시겠습니까?')) {
      return;
    }

    try {
      await TodoService.delete(todo.id);
      getTodoList();
    } catch (error) {
      console.error(error);
    }
  }, [todo]);

  return (
    <li>
      <input type="checkbox" checked={todo.isCompleted} onChange={onComplete} />
      {!editMode ? (
        <div>{todo.todo}</div>
      ) : (
        <input value={todoValue} onChange={handleTodoValue} />
      )}
      {!editMode ? (
        <>
          <button type="button" onClick={handleEditMode}>
            수정
          </button>
          <button type="button" onClick={onDelete}>
            삭제
          </button>
        </>
      ) : (
        <>
          <button type="button" onClick={onUpdate}>
            제출
          </button>
          <button type="button" onClick={handleEditMode}>
            취소
          </button>
        </>
      )}
    </li>
  );
}
