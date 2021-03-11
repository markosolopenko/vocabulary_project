import React from 'react';
import s from './header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={s.header}>
      <Link to="/main" className="link">
        <div className={s["logo"]}>Vitalik Vocabulary</div>
      </Link>
      <div className={s["nav-bar"]}>
        <Link to="/words" className="link">
          <div className={s["nav-bar__item"]}>words</div>
        </Link>
      </div>
    </div>
  )
};
