<<<<<<< HEAD
import { FETCH_FIRST_HUNDRED_WORDS, FETCH_WORD, SET_PAGE } from '../actions';
=======
import {
  FETCH_FIRST_HUNDRED_WORDS,
  FETCH_WORD,
  SET_PAGE,
  GET_AMOUNT_OF_PAGES,
  ADD_PAGE,
  DECREMENT_PAGE,
} from '../actions';
>>>>>>> develop

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
<<<<<<< HEAD
        words: action.payload.details,
        amountOfPages: action.payload.amount,
=======
        words: action.payload,
>>>>>>> develop
      };
    case FETCH_WORD:
      return {
        ...state,
        wordJson: action.payload,
      };
    case SET_PAGE:
<<<<<<< HEAD
      return {
        ...state,
        page: action.payload.page,
=======
      return {
        ...state,
        page: action.payload.page,
      };
    case GET_AMOUNT_OF_PAGES:
      return {
        ...state,
        amountOfPages: action.payload.value,
      };
    case ADD_PAGE:
      return {
        ...state,
        page: Number(state.page) + 1,
      };
    case DECREMENT_PAGE:
      return {
        ...state,
        page: Number(state.page) - 1,
>>>>>>> develop
      };
    default: {
      return state;
    }
  }
};
