import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/slices/todoSlice';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="border p-2 w-full"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="дуду"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Добавить</button>
    </form>
  );
};

export default TodoForm;
