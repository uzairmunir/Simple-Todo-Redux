import React, { useState } from 'react';
import './Input.css';
import { useDispatch } from 'react-redux';
import { saveTodo } from './../features/TodoSlice';

const Input = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodo = () => {
    console.log(`Adding ${input}`);
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput('');
  };
  return (
    <div className='input'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo} className='button'>
        Add Todo
      </button>
    </div>
  );
};

export default Input;
