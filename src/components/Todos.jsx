import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Todos = ({ setEditingTodo }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEdit = (todo) => {
    setEditingTodo(todo);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-white mb-4">Todos</h2>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            className="flex justify-between items-center bg-zinc-800 px-4 py-2 rounded shadow-sm"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <div className="flex space-x-3">
              <button
                onClick={() => handleEdit(todo)}
                className="text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
