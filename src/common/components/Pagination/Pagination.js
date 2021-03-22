import React, { useEffect } from 'react';

import { ReactComponent as ArrowLeft } from '../../../assets/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../../assets/arrowRight.svg';

import s from './Pagination.module.scss';

export const Pagination = ({ onChange, activePage, totalPages }) => {
  useEffect(() => {
    onChange(localStorage.getItem('page'));
  }, []);
  const handleChange = (e) => {
    localStorage.setItem('page', e.target.value);
    onChange(localStorage.getItem('page'));
  };
  return (
    <div className={s.pagination}>
      <ArrowLeft
        className={s['pagination__arrow-back']}
        onClick={() => {
          if (activePage > 1) {
            localStorage.setItem('page', Number(localStorage.getItem('page')) - 1);
            onChange(localStorage.getItem('page'));
          }
        }}
      />
      <div className={s.pagination__text}>Сторінка:</div>
      <div className={s.pagination__form}>
        <input
          className={s.pagination__form__input}
          onChange={handleChange}
          value={localStorage.getItem('page')}
        />
      </div>
      <div className={s.pagination__text}>з</div>
      <div
        className={s.pagination__page}
        onClick={() => {
          localStorage.setItem('page', totalPages);
          onChange(localStorage.getItem('page'));
        }}
      >
        {totalPages}
      </div>
      <ArrowRight
        className={s['pagination__arrow-forward']}
        onClick={() => {
          if (activePage < totalPages) {
            localStorage.setItem('page', Number(localStorage.getItem('page')) + 1);
            onChange(localStorage.getItem('page'));
          }
        }}
      />
    </div>
  );
};
