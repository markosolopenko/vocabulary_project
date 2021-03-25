import React from 'react';
import { Link } from 'react-router-dom';

import s from './Header.module.scss';

export const Header = () => {
  return (
    <div className={s.header}>
      <Link to="/main" className="link">
<<<<<<< HEAD
        <div className={s.header__logo}>Vitalik Vocabulary</div>
      </Link>
      <div className={s['header__nav-bar']}>
        <Link to="/words" className="link">
          <div className={s['header__nav-bar__item']}>words</div>
=======
        <div className={s.logo}>Vitalik Vocabulary</div>
      </Link>
      <div className={s['nav-bar']}>
        <Link to="/words" className="link">
          <div className={s['nav-bar__item']}>words</div>
>>>>>>> develop
        </Link>
      </div>
    </div>
  );
};
