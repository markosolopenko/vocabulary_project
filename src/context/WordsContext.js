import { createContext, useReducer } from "react";
import { wordsReducer } from '../reducers/wordsReducer';

export const StateWordsContext = createContext(null);
export const DispatchWordsContext = createContext(null);


const initialState = {
  firstHundredWords: [],
  wordJson: '',
}


export const WordsContext = (props) => {
  const [state, dispatch] = useReducer(wordsReducer, initialState);
  return (
    <StateWordsContext.Provider value={state}>
      <DispatchWordsContext.Provider value={dispatch}>
        {props.children}
      </DispatchWordsContext.Provider>
    </StateWordsContext.Provider>
  )
}