import React from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import TodoFilters from './components/TodoFilters';
import { useSelector } from 'react-redux';

const App = () => {
  const { todos, filter } = useSelector(state => state.todos);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
<div className="min-h-screen bg-gray-100 p-6">
  <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold text-center mb-6">📝 дуду лист</h1>
      <TodoForm />
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <TodoFilters />
    </div>
    </div>
  );
};

export default App;
