import React, { useRef, useState } from 'react';

import { getWord } from '../../api/getWord';
import { wordsActionTypes } from '../../actions/wordsActionTypes';
import { useDispatch } from 'react-redux';

import s from './wordsOnMainPage.module.scss';

export const WordsOnMainPage = ({ words }) => {
  const myRef = useRef({});
  const [idOfEl, setId] = useState();
  const dispatch = useDispatch();
  const { FETCH_WORD } = wordsActionTypes;
  const handleWordClick = (word) => {
    getWord(word).then(data => dispatch({ type: FETCH_WORD, payload: data }));
  }
  return (
    <div className={s["words-box"]}>
      {
        words.map((word, id) =>
          <div
            ref={(ref) => { myRef.current[word.id] = ref }}
            onClick={() => {
              handleWordClick(word.word)
              setId(word.id)
            }}
            key={id}
            className={s["words-box__item"]}
            style={idOfEl === word.id ? {color: 'white', backgroundColor: 'black'}: null}
          >
            {word.word}
          </div>
        )
      }
    </div>
  )
};
