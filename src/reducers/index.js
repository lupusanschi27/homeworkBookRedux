import { ADD_ARTICLE, MODIFY_AUTHOR, DELETE_ARTICLE } from '../constants/action-types';
import { handleCapitalizeSentence } from '../utils/sentenceUpperCase';

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {

    case ADD_ARTICLE: {
      return {
        ...state,
        articles: [payload, ...state.articles]
      }
    }
    case DELETE_ARTICLE: {
      const newlyState = state.articles.filter(article => {
        return article.id !== payload.id
      })
      return {
        ...state,
        articles: newlyState
      }
    }
    case MODIFY_AUTHOR: {     
      const newState =  state.articles.map(article => {
        if(article.id === payload.id){
          return {
            ...article,
            author: handleCapitalizeSentence(payload.author)
          }
        }else{
          return article
        }
      })
      return {
        ...state,
        articles: newState
      }
    }

    default:
      return state;
  }
}

export default rootReducer;
