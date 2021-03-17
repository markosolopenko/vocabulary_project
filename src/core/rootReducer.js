import { combineReducers } from 'redux';
import { wordsReducer } from '../reducers/wordsReducer';

export const rootReducer = combineReducers({
  wordsReducer,
});