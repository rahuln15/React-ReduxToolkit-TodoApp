import React, { useState } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

const TodoApp = () => {
  const [editingTodo, setEditingTodo] = useState(null);

  return (
    <div>
      <AddTodo editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
      <Todos setEditingTodo={setEditingTodo} />
    </div>
  );
};

export default TodoApp;
