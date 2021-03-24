import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
};

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done == true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
  },
});

export const { saveTodo, setCheck, deleteTodo } = TodoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default TodoSlice.reducer;
