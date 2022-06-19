import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import { ADD_ARTICLE } from '../constants/action-types';

const Form = () => {
  //Inner state
  const [title, setTitle] = useState('');

  //Redux function
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv1();
    if (!title) return;
    dispatch({ type: ADD_ARTICLE, payload: { id, title:title[0].toUpperCase()+title.slice(1), author: '' } });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <input className="btn btn-success btn-md" type="submit" value="Save" />
    </form>
  );
};

export default Form;
