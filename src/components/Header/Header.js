import React from 'react';

import 'antd/dist/antd.css';

import { Layout } from 'antd';

import s from './header.module.scss';

const { Header } = Layout;

export const HeaderPage = () => {
  return (
    <Header className={s.header}>
      <span className={s.header__logo}>S&ensp; S&ensp;L&ensp;U&ensp;W</span>
    </Header>
  );
};
