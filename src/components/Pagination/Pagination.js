import React, { useEffect, useState } from 'react';

import { ReactComponent as  ArrowLeft } from '../../assets/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrowRight.svg';
import { wordsActionTypes } from '../../actions/wordsActionTypes';

import { useSelector, useDispatch } from 'react-redux';

import s from './Pagination.module.scss';


export const Pagination = () => {
  const { SET_PAGE, ADD_PAGE, DECREMENT_PAGE } = wordsActionTypes;
  const dispatch = useDispatch();
  const store = useSelector(state => state);
  const { wordsReducer } = store;
  const {amountOfPages, page} = wordsReducer; 
  const [value, setValue] = useState(page);
  useEffect(() => {
    setValue(page);
  }, [page])
  const handleChange = (e) => {
    const pageNum = e.target.value;
    setValue(pageNum); 
    dispatch({ type: SET_PAGE, payload: {page: e.target.value }})
  }
  return (
    <div className={s["pagination"]}>
      <ArrowLeft className={s["pagination__arrow-back"]} 
        onClick={value > 1 ? () => dispatch({ type: DECREMENT_PAGE }) : null}
      />
      <div className={s["pagination__text"]}>Сторінка:</div>
      <div className={s["pagination__form"]}> 
        <input 
          className={s["pagination__form__input"]} 
          onChange={ handleChange }
          value={ value }
        />
      </div>
      <div className={s["pagination__text"]}>з</div>
      <div className={s["pagination__total-pages"]}>{amountOfPages}</div>
      <ArrowRight className={s["pagination__arrow-forward"]}
        onClick={() => dispatch({ type: ADD_PAGE })}
      />
    </div>
  )
}
