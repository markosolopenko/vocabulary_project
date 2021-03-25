import React, { useState } from 'react';

<<<<<<< HEAD
import { ReactComponent as Search } from '../../../assets/search.svg';
=======
import { useDispatch } from 'react-redux';

import { FETCH_WORD, SET_PAGE } from '../../../actions';
import { getWordByPage } from '../../../api/getWordByPage';
>>>>>>> develop

import s from './SerachForm.module.scss';

export const SearchForm = ({ onSearch }) => {
  const [value, setValue] = useState('');
<<<<<<< HEAD
  const handleChange = (event) => {
    setValue(event.target.value);
  };
=======
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSearchClick = () => {
    getWordByPage(value).then((data) => {
      dispatch({ type: FETCH_WORD, payload: data });
      dispatch({ type: SET_PAGE, payload: { page: data.pageNumber } });
    });
  };

>>>>>>> develop
  return (
    <div className={s['search-form']}>
      <input
        onChange={handleChange}
        className={s['search-form__input']}
        placeholder="Search Word"
      />
<<<<<<< HEAD
      <button type="submit" onClick={() => onSearch(value)} className={s['search-form__button']}>
        <Search className={s['search-form__button__icon']} />
=======
      <button type="submit" onClick={handleSearchClick} className={s['search-form__button']}>
        Search
>>>>>>> develop
      </button>
    </div>
  );
};
