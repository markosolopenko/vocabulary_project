import { useState, useEffect, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { getWord } from '../../api/getWord';
import { FETCH_WORD } from '../../actions';

import s from './WordsOnMainPage.module.scss';

export const WordsOnMainPage = ({ words, myRef, setQueryWord, wordJson }) => {
  const dispatch = useDispatch();
  const scrollToChoosenElement = () => {
    myRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };
  useEffect(() => {
    if (myRef.current) {
      scrollToChoosenElement();
    }
  }, [wordJson]);
  const handleWordClick = useCallback((word) => {
    getWord(word).then((data) => dispatch({ type: FETCH_WORD, payload: data }));
    setQueryWord(word);
  }, []);
  return (
    <div className={s['words-box']}>
      {words.map((word, id) => (
        <div
          ref={wordJson.id === word.id ? myRef : null}
          onClick={() => handleWordClick(word.word)}
          key={id}
          className={s['words-box__item']}
          style={wordJson.id === word.id ? { color: 'white', backgroundColor: 'rgb(59, 57, 57)' } : null}
        >
          {word.word}
        </div>
      ))}
    </div>
  );
};
