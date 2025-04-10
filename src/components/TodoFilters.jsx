import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/slices/todoSlice';

const filters = ['all', 'active', 'completed'];

const TodoFilters = () => {
  const dispatch = useDispatch();
  const current = useSelector(state => state.todos.filter);

  return (
    <div className="flex gap-2 mt-4">
      {filters.map(f => (
        <button
          key={f}
          onClick={() => dispatch(setFilter(f))}
          className={`px-4 py-1 border rounded ${f === current ? 'bg-blue-500 text-white' : ''}`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TodoFilters;
