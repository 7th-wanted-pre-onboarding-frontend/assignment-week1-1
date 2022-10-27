/* eslint-disable no-console */
import React, { useCallback, useState } from 'react';
import ui from '../ui';

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
    <ui.TodoMapWrap>
      <ui.TodoList>
        <ui.TodoIsCompleted
          type="checkbox"
          checked={todo.isCompleted}
          onChange={onComplete}
        />
        <ui.TodoContent>
          {!editMode ? (
            <ui.TodoContentText>{todo.todo}</ui.TodoContentText>
          ) : (
            <ui.TodoContentInput value={todoValue} onChange={handleTodoValue} />
          )}
        </ui.TodoContent>
      </ui.TodoList>
      <ui.TodoFunction>
        {!editMode ? (
          <>
            <ui.UpdateTodo onClick={handleEditMode}>수정</ui.UpdateTodo>
            <ui.DeleteTodo onClick={onDelete}>삭제</ui.DeleteTodo>
          </>
        ) : (
          <>
            <ui.UpdateComplete onClick={onUpdate}>완료</ui.UpdateComplete>
            <ui.UpdateCancle onClick={handleEditMode}>취소</ui.UpdateCancle>
          </>
        )}
      </ui.TodoFunction>
    </ui.TodoMapWrap>
  );
}
