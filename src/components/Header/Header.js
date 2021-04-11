import React from 'react';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb } from 'antd';

// import s from './header.module.scss';

const { Header, Content, Footer } = Layout;

export const HeaderPage = () => {
  return (
    <Layout>
      <Header
        style={{
          background: 'linear-gradient(rgb(0, 21, 41) 40%, rgb(53, 50, 50) 100%)',
          padding: '5px 0 5px 40px',
          height: '70px',
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: '30px',
            fontWeight: 'bold',
            height: '40px',
            borderBottom: '1px solid orange',
            borderTop: '1px solid orange',
            padding: '6px',
            borderRadius: '5px',
          }}
        >
          S&ensp; S&ensp;L&ensp;U&ensp;W
        </span>
      </Header>
    </Layout>
  );
};
