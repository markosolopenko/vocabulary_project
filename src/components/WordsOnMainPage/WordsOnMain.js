import React, { useContext } from 'react';
import { getWord } from '../../api/getWord';
import { DispatchWordsContext } from '../../context/WordsContext';
import s from './wordsOnMainPage.module.scss';
import { wordsActions } from '../../actions/wordsActions';

export const WordsOnMainPage = ({ words }) => {
  const dispatch = useContext(DispatchWordsContext);
  const {FETCH_WORD} = wordsActions;
  const handleWordClick = (word) => {
    getWord(word).then(data => 
      dispatch({
        type: FETCH_WORD,
        payload: data
      })  
    );
  }
  return (
    <div className={s["words-box"]}>
      {
        words.map((word, id) =>
          <div
            onClick={() => handleWordClick(word.word)}
            key={id}
            className={s["words-box__item"]}>
            {word.word}
          </div>
        )
      }
    </div>
  )
};
