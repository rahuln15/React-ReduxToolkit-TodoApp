import React from 'react';
import "./App.css";
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import TodoApp from './components/TodoApp';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-semibold text-center mb-8">Todo App Using Redux Toolkit</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
          <TodoApp />
        </div>
      </div>
    </div>
  );
};

export default App;
