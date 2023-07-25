import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { addNewTodos } from '../redux/actions';

const TodoForm = () => {

  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const onFromSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodos(task));
    
    setTask('');
  }

  const onInputChange = (e) =>{
    setTask(e.target.value);
    console.log(e.target.value);
  }

  return (
    <form className='form' onSubmit={onFromSubmit}>
        <input placeholder='Enter a new todo ... ' className='innput' onChange={onInputChange} value={task}/>
    </form>
  )
}

export default TodoForm