import { FETCH_FIRST_HUNDRED_WORDS, FETCH_WORD, SET_PAGE } from '../actions';

const initialState = {
  words: [],
  wordJson: {},
  page: 1,
  amountOfPages: 0,
};

export const wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FIRST_HUNDRED_WORDS:
      return {
        ...state,
        words: action.payload.details,
        amountOfPages: action.payload.amount,
      };
    case FETCH_WORD:
      return {
        ...state,
        wordJson: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload.page,
      };
    default: {
      return state;
    }
  }
};
