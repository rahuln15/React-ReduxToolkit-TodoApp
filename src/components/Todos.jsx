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
    <div>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;


