import React from 'react';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb } from 'antd';

import s from './header.module.scss';

const { Header, Content, Footer } = Layout;

export const HeaderPage = () => {
  return (
    <Layout>
      <Header className={s.header}>
        <span className={s.header__logo}>S&ensp; S&ensp;L&ensp;U&ensp;W</span>
      </Header>
    </Layout>
  );
};
