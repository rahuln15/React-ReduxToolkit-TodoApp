// import React from 'react'
// import { useDispatch } from 'react-redux';
// import { addTodo } from '../features/todo/todoSlice';

// const AddTodo = () => {
//     const [input, setInput] = React.useState('');
//     const dispatch = useDispatch()

//     const addTodoHandler = (e) =>{
//         e.preventDefault();
//         dispatch(addTodo(input));
//         setInput('');
//     }
//   return (
//     <div>
//          <form onSubmit={addTodoHandler} className='space-x-3 mt-12' action="">
//         <input 
//         type="text" 
//         className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' 
//         placeholder='Enter a Todo...' 
//         value={input} 
//         onChange={(e) => setInput(e.target.value)} />
//         <button
//         type='submit'
//         className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>Add Todo</button>
        
//     </form>
//     </div>
//   )
// }

// export default AddTodo


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
    <div>
      <form onSubmit={handleSubmit} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {editingTodo ? 'Update Todo' : 'Add Todo'}
        </button>
        {editingTodo && (
          <button
            type="button"
            onClick={() => setEditingTodo(null)}
            className="text-gray-500 ml-3"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default AddTodo;
