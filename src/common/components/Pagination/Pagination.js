import React, { useEffect, useState } from 'react';

import { ReactComponent as ArrowLeft } from '../../../assets/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../../assets/arrowRight.svg';

import s from './Pagination.module.scss';

export const Pagination = ({
  onChange,
  activePage,
  totalPages,
  arrowForwardOnClick,
  arrowBackOnClick,
}) => {
  const [page, setValue] = useState(activePage);
  useEffect(() => {
    setValue(activePage);
  }, [activePage]);
  console.log(page);
  return (
    <div className={s.pagination}>
      <ArrowLeft
        className={s['pagination__arrow-back']}
        onClick={page > 1 ? arrowBackOnClick : null}
      />
      <div className={s.pagination__text}>Сторінка:</div>
      <div className={s.pagination__form}>
        <input
          className={s.pagination__form__input}
          onChange={(e) => onChange(e.target.value)}
          value={page}
        />
      </div>
      <div className={s.pagination__text}>з</div>
      <div className={s['pagination__total-pages']}>{totalPages}</div>
      <ArrowRight className={s['pagination__arrow-forward']} onClick={arrowForwardOnClick} />
    </div>
  );
};
