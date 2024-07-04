import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';

const AddTodo = ({ editingTodo, setEditingTodo }) => {
  const [input, setInput] = React.useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (editingTodo) {
      setInput(editingTodo.text);
    } else {
      setInput('');
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTodo) {
      dispatch(updateTodo({ id: editingTodo.id, text: input }));
      setEditingTodo(null);
    } else {
      dispatch(addTodo(input));
    }
    setInput('');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-white mb-4">{editingTodo ? 'Edit Todo' : 'Add New Todo'}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex space-x-3">
          <button
            type="submit"
            className={`text-white py-2 px-6 rounded-lg transition-colors duration-200 ${
              editingTodo ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-indigo-500 hover:bg-indigo-600'
            }`}
          >
            {editingTodo ? 'Update Todo' : 'Add Todo'}
          </button>
          {editingTodo && (
            <button
              type="button"
              onClick={() => setEditingTodo(null)}
              className="text-gray-500 border border-gray-500 hover:text-white hover:border-white py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
