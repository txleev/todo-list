import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/slices/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span className={`ml-2 ${todo.completed ? '' : ''}`}>{todo.text}</span>
      </div>
      <button onClick={() => dispatch(deleteTodo(todo.id))} className="text-red-500">
        удалить
      </button>
    </div>
  );
};

export default TodoItem;
