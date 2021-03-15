import { wordsActions } from '../actions/wordsActions';

const { FETCH_FIRST_HUNDRED_WORDS, 
        FETCH_WORD,
        SET_PAGE
} = wordsActions;

export const wordsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_FIRST_HUNDRED_WORDS:
      return {
        ...state,
        words: action.payload
      };
    case FETCH_WORD:
      return {
        ...state,
        wordJson: action.payload
      }
    case SET_PAGE: 
      return {
        ...state,
        page: action.payload.page
      }
    default: {
      return state;
    }
  }
}