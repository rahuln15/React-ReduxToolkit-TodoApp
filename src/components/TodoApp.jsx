import React, { useState } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

const TodoApp = () => {
  const [editingTodo, setEditingTodo] = useState(null);

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="max-w-lg w-full p-4 bg-gray-900 rounded-lg shadow-md">
        <AddTodo editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
        <Todos setEditingTodo={setEditingTodo} />
      </div>
    </div>
  );
};

export default TodoApp;
