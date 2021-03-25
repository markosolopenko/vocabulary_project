import React from 'react';

import { useSelector } from 'react-redux';

import s from './Noun.module.scss';

export const Noun = () => {
  const store = useSelector((state) => state);
  const { wordsReducer } = store;
  const { pluralCases, singleCases } = wordsReducer;
  return (
    <div className={s['noun-table__column']}>
      {pluralCases.map((word, id) => (
        <div key={id} className={s['noun-table__row']}>
          {word}
        </div>
      ))}
    </div>
  );
};
