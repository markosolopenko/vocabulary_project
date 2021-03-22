import { useEffect } from 'react';

import { useQueryState } from 'react-router-use-location-state';

import { ReactComponent as ArrowLeft } from '../../../assets/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../../assets/arrowRight.svg';

import s from './Pagination.module.scss';

export const Pagination = ({ onChange, activePage, totalPages }) => {
  const [queryString, setQueryString] = useQueryState('page', 1);
  useEffect(() => {
    onChange(queryString);
  }, [queryString]);
  return (
    <div className={s.pagination}>
      <ArrowLeft
        className={s['pagination__arrow-back']}
        onClick={() => activePage > 1 && setQueryString(queryString - 1)}
      />
      <div className={s.pagination__text}>Сторінка:</div>
      <div className={s.pagination__form}>
        <input
          className={s.pagination__form__input}
          onChange={(e) => {
            if (Number(e.target.value) <= totalPages) {
              setQueryString(e.target.value);
            }
          }}
          value={queryString}
        />
      </div>
      <div className={s.pagination__text}>з</div>
      <div className={s.pagination__page} onClick={() => setQueryString(totalPages)}>
        {totalPages}
      </div>
      <ArrowRight
        className={s['pagination__arrow-forward']}
        onClick={() => activePage < totalPages && setQueryString(queryString + 1)}
      />
    </div>
  );
};
