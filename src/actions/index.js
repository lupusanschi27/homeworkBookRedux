import { ADD_ARTICLE, MODIFY_AUTHOR, DELETE_ARTICLE } from '../constants/action-types';

const addArticle = (payload) => {
  return { type: ADD_ARTICLE, payload };
}

const deleteArticle = (payload) => {
  return { type: DELETE_ARTICLE, payload };
}

const modifyAuthor = (payload) => {
  return { type: MODIFY_AUTHOR, payload };
}




export { addArticle, modifyAuthor, deleteArticle };
