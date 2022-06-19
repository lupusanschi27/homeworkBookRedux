import { ADD_ARTICLE } from '../constants/action-types';

const fetchArticles = async dispatch => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  dispatch({ type: ADD_ARTICLE, payload: data })
};

export default fetchArticles;
