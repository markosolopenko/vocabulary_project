import React, { useEffect, useMemo, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  FETCH_FIRST_HUNDRED_WORDS,
  GET_AMOUNT_OF_PAGES,
  SET_PAGE,
  ADD_PAGE,
  DECREMENT_PAGE,
} from '../../actions';
import { getWords } from '../../api/getWords';
import { SearchForm, Subscription, WordsOnMainPage } from '../../components';
import { Tabs, Table, Pagination } from '../../common';

import s from './Main.module.scss';

export const Main = () => {
  const defaultTabId = 1;
  const [activeTabIndex, setActiveTabIndex] = useState(defaultTabId);
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const { wordsReducer } = store;
  const { words, wordJson, page, amountOfPages } = wordsReducer;
  const configArr = [
    {
      id: 1,
      label: 'Табличка',
      content: <Table wordJson={wordJson} />,
    },
    {
      id: 2,
      label: 'Опис',
      content: <Subscription />,
    },
  ];

  useEffect(() => {
    getWords(page)
      .then((data) => {
        return (
          dispatch({ type: FETCH_FIRST_HUNDRED_WORDS, payload: data.details }),
          dispatch({ type: GET_AMOUNT_OF_PAGES, payload: { value: data.pagesCount } })
        );
      })
      .catch((err) => new Error(err));
  }, [page]);
  const handleSetActiveTagIndex = (id) => {
    setActiveTabIndex(id);
  };
  const handleChangeForPaginationInput = (pageNum) => {
    dispatch({ type: SET_PAGE, payload: { page: pageNum } });
  };
  return (
    <div className={s['main-page']}>
      <div className={s['main-page__aside']}>
        <SearchForm />
        <div className={s['main-page__aside__list']}>
          <WordsOnMainPage words={words} />
        </div>
        <Pagination
          activePage={page}
          totalPages={amountOfPages}
          onChange={handleChangeForPaginationInput}
        />
      </div>
      <div className={s['main-page__content']}>
        <Tabs
          isFlexible
          activeTabId={activeTabIndex}
          onClick={handleSetActiveTagIndex}
          tabsConfigArr={configArr}
        />
      </div>
    </div>
  );
};
