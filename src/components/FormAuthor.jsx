import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { MODIFY_AUTHOR } from '../constants/action-types';


const FormAuthor = ({modifyId,setAuthorToggle}) => {
  //Inner state
  const [author, setAuthor] = useState('');

  //Redux function
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target
    setAuthor(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: MODIFY_AUTHOR, payload: { id:modifyId, author} });
    setAuthor('');
    setAuthorToggle(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='title'>Author</label>
        <input
          type='text'
          className='form-control'
          id='title'
          value={author}
          onChange={handleChange}
        />
      </div>
      <input className='btn btn-info btn-md' type='submit' value='Modify author' />
    </form>
  );
}

export default FormAuthor
