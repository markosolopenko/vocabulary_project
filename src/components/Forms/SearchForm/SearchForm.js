import React, { useState } from 'react';

import { wordsActionTypes } from '../../../actions/wordsActionTypes';
import { getWordByPage } from '../../../api/getWordByPage';
import { useDispatch } from 'react-redux'

import s from './serachForm.module.scss';

export const SearchForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const { FETCH_WORD, SET_PAGE } = wordsActionTypes;
  const handleChange = (event) => {
    setValue(event.target.value);
  }  
  const handleSearchClick = () => {
    getWordByPage(value).then(data => {
      dispatch({ type: FETCH_WORD, payload: data })
      dispatch({ type: SET_PAGE, payload: { page: data.pageNumber } })
    });
  };
  
  return (
    <div className={s["search-form"]}>
      <input
        onChange={handleChange}
        className={s["search-form__input"]}
        placeholder="Search Word"
      />
      <button type="submit" onClick={ handleSearchClick }>Search</button>
    </div>
  )
}
