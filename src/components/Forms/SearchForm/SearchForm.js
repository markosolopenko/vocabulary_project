import React, { useState } from 'react';

import { ReactComponent as Search } from '../../../assets/search.svg';

import s from './SerachForm.module.scss';

export const SearchForm = ({ onSearch }) => {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={s['search-form']}>
      <input
        onChange={handleChange}
        className={s['search-form__input']}
        placeholder="Search Word"
      />
      <button type="submit" onClick={() => onSearch(value)} className={s['search-form__button']}>
        <Search className={s['search-form__button__icon']} />
      </button>
    </div>
  );
};
