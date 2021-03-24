import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import './Input.css';
import { useDispatch } from 'react-redux';
import { setCheck } from './../features/TodoSlice';
import { deleteTodo } from './../features/TodoSlice';
const TodoItem = ({ name, id, done }) => {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setCheck(id));
  };
  const deleteTodos = () => {
    dispatch(deleteTodo());
  };
  return (
    <div className='todo-item'>
      <Checkbox
        checked={done}
        onChange={handleChange}
        name='checkedB'
        color='primary'
      />
      <span>
        <p>{name}</p>
      </span>
    </div>
  );
};

export default TodoItem;
