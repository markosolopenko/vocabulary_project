import React, { useContext } from 'react';

import { StateWordsContext } from '../../../context/WordsContext';

import s from './noun.module.scss';

export const Noun = () => {
  const store = useContext(StateWordsContext);
  const { pluralCases, singleCases } = store;
  return (
    <div className={s['noun-table']}>
      <div className={s['noun-table__']}></div>
    </div>
  )
} 
