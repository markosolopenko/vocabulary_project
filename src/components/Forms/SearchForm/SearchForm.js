import React from 'react';
import s from './serachForm.module.scss';

export const SearchForm = () => {
  return (
    <div className={s["search-form"]}>
      <input
        className={s["search-form__input"]}
        placeholder="Search Word"
      />
      <button type="submit">Search</button>
    </div>
  )
}
