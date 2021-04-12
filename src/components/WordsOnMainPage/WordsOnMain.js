import React, { useRef, useState } from 'react';

import { useDispatch } from 'react-redux';

import { getWord } from '../../api/getWord';
import { FETCH_WORD } from '../../actions';

import s from './WordsOnMainPage.module.scss';

export const WordsOnMainPage = ({ words }) => {
  const myRef = useRef({});
  const [idOfEl, setId] = useState();
  const dispatch = useDispatch();
  const handleWordClick = (word) => {
    getWord(word).then((data) => dispatch({ type: FETCH_WORD, payload: data }));
  };
  return (
    <div className={s['words-box']}>
      {words.map((word, id) => (
        <div
          ref={(ref) => {
            myRef.current[word.id] = ref;
          }}
          onClick={() => {
            handleWordClick(word.word);
            setId(word.id);
          }}
          key={id}
          className={s['words-box__item']}
          style={idOfEl === word.id ? { color: 'white', backgroundColor: 'rgb(59, 57, 57)' } : null}
        >
          {word.word}
        </div>
      ))}
    </div>
  );
};
