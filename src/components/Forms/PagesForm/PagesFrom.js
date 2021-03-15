import React, { useContext, useState } from 'react';

import { ReactComponent as  ArrowLeft } from '../../../assets/arrow-left-solid.svg';
import { ReactComponent as ArrowRight } from '../../../assets/arrow-right-solid.svg';
import { wordsActions } from '../../../actions/wordsActions';

import s from './pagesForm.module.scss';
import { DispatchWordsContext } from '../../../context/WordsContext';


export const PagesForm = () => {
  const { SET_PAGE } = wordsActions;
  const dispatch = useContext(DispatchWordsContext);
  const debounce = (delay) => {
    let timer;
    return (e) => {
      clearInterval(timer);
      timer = setTimeout(() => {
        dispatch({
          type: SET_PAGE,
          payload: {page: e.target.value}
        })
      }, delay);
    }
  }
  return (
    <div className={s["pages-form"]}>
      <div className={s["pages-form__item"]}>
        <ArrowLeft className={s["arrowback"]} />
        <input className={s["input"]} onChange={debounce(1000)}  />
        <ArrowRight className={s["arrowforward"]} />
      </div>
    </div>
  )
}
