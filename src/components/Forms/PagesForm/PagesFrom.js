import React, { useEffect, useState } from 'react';

import { ReactComponent as  ArrowLeft } from '../../../assets/arrow-left-solid.svg';
import { ReactComponent as ArrowRight } from '../../../assets/arrow-right-solid.svg';
import { wordsActions } from '../../../actions/wordsActions';

import { useSelector, useDispatch } from 'react-redux';

import s from './pagesForm.module.scss';


export const PagesForm = () => {
  const { SET_PAGE, ADD_PAGE, DECREMENT_PAGE } = wordsActions;
  const dispatch = useDispatch();
  const store = useSelector(state => state);
  const { wordsReducer } = store;
  const {amountOfPages, page} = wordsReducer; 
  const [value, setValue] = useState(page);
  useEffect(() => {
    setValue(page);
  }, [page])
  const debounce = (e) => {
    let timer;
    return () => {
      clearInterval(timer);
      timer = setTimeout(() => {
        dispatch({ type: SET_PAGE, payload: {page: e.target.value }})
      }, 2000);
    }
  };
  const handleChange = (e) => {
    const pageNum = e.target.value;
    setValue(pageNum); 
    const debouncedSave = debounce(e);
    debouncedSave();
  }
  return (
    <div className={s["pages-form"]}>
      <div className={s["pages-form__item"]}>
        <ArrowLeft className={s["arrowback"]} 
          onClick={value > 1 ? () => dispatch({ type: DECREMENT_PAGE }) : null}
        />
        <div className={s["pageWord"]}>Сторінка:</div>
        <input 
          className={s["input"]} 
          onChange={handleChange}
          value={value}
        />
        <div className={s["letter"]}>з</div>
        <div className={s["pagesCount"]}>{amountOfPages}</div>
        <ArrowRight className={s["arrowforward"]}
          onClick={() => dispatch({ type: ADD_PAGE })}
        />
      </div>
    </div>
  )
}
