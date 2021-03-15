import React, { useContext } from 'react';

import { StateWordsContext } from '../../../context/WordsContext';

import s from './noun.module.scss';

export const Noun = () => {
  const store = useContext(StateWordsContext);
  const { pluralCases, singleCases } = store;
  return (
    <div className={s['noun-table__column']}>
      { 
        pluralCases.map((word, id) => 
          <div key={id} className={s['noun-table__row']}>
            {word}
          </div>
        )
      }
    </div>
  )
} 
