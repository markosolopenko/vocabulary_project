import React, { useState } from 'react';

import { ReactComponent as Search } from '../../../assets/search.svg';

import s from './searchForm.module.scss';

export const SearchForm = ({ onSearch, words }) => {
  const [value, setValue] = useState('Привіт');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <form className={s['search-form']} onSubmit={(e) => onSearch(e, value)}>
      <input
        onChange={handleChange}
        className={s['search-form__input']}
        placeholder="Search Word"
        defaultValue={value}
      />
      {words.length !== 0 && (
        <button type="submit" className={s['search-form__button']}>
          <Search className={s['search-form__button__icon']} />
        </button>
      )}
    </form>
  );
};
