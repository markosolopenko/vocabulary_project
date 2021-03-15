import { wordsActions } from '../actions/wordsActions';

const { FETCH_FIRST_HUNDRED_WORDS, 
        FETCH_WORD,
} = wordsActions;

export const wordsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_FIRST_HUNDRED_WORDS:
      return {
        ...state,
        firstHundredWords: action.payload
      };
    case FETCH_WORD:
      return {
        ...state,
        wordJson: action.payload
      }
    default: {
      return state;
    }
  }
}