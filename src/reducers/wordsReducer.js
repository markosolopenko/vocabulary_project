import { wordsActions } from '../actions/wordsActions';

export const wordsReducer = (state, action) => {
  switch (action.type) {
    case wordsActions.FETCH_FIRST_HUNDRED_WORDS:
      return {
        ...state,
        firstHundredWords: action.payload
      };
    case wordsActions.FETCH_WORD:
      return {
        ...state,
        wordToSearch: action.payload.word
      }
    default: {
      return state;
    }
  }
}