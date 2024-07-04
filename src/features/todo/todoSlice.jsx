import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos:[{id:1, text:"Demo"}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            // console.log(action.payload);
            state.todos.push(todo)
            // console.log(todo);
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            // console.log(action.payload);
            const existingTodo = state.todos.find((todo) => todo.id === id);
            // console.log(existingTodo);
            if (existingTodo) {
              existingTodo.text = text;
            }
            // console.log(existingTodo.text);
            // console.log(state);
    }
}

});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer

