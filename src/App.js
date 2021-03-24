import React from 'react';
import Input from './Components/Input';
import './App.css';
import TodoItem from './Components/Todoitem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/TodoSlice';
const App = () => {
  const todoList = useSelector(selectTodoList);
  return (
    <div className='app'>
      <div className='app-container'>
        <div className='app-todo'>
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
};

export default App;
