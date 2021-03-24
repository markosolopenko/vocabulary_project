import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useQueryState } from 'react-router-use-location-state';

import { FETCH_FIRST_HUNDRED_WORDS, SET_PAGE, FETCH_WORD } from '../../actions';
import { getWords, getWordByPage, getWord } from '../../api';
import { SearchForm, Subscription, WordsOnMainPage } from '../../components';
import { Tabs, Pagination } from '../../common';

import s from './Main.module.scss';

export const Main = () => {
  const defaultTabId = 1;
  const [activeTabIndex, setActiveTabIndex] = useState(defaultTabId);
  const [queryString, setQueryString] = useQueryState('page', 1);
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const { wordsReducer } = store;
  const { words, wordJson, page, amountOfPages } = wordsReducer;
  const configArr = [
    {
      id: 1,
      label: 'Табличка',
      content: <div>Hello</div>,
    },
    {
      id: 2,
      label: 'Опис',
      content: <Subscription />,
    },
  ];
  useEffect(() => {
    getWords(page).then((data) => {
      dispatch({
        type: FETCH_FIRST_HUNDRED_WORDS,
        payload: { details: data.details, amount: data.pagesCount },
      });
    });
  }, [page]);
  const handleSetActiveTagIndex = (id) => {
    setActiveTabIndex(id);
  };
  const handleChangeForPaginationInput = (pageNum) => {
    dispatch({ type: SET_PAGE, payload: { page: pageNum } });
  };
  const handleSearchButtonClick = (value) => {
    getWordByPage(value).then((data) => {
      dispatch({ type: SET_PAGE, payload: { page: data.pageNumber } });
      setQueryString(data.pageNumber);
    });
    getWord(value).then((data) => {
      dispatch({ type: FETCH_WORD, payload: data });
    });
  };
  return (
    <div className={s['main-page']}>
      <div className={s['main-page__aside']}>
        <SearchForm onSearch={handleSearchButtonClick} />
        <div className={s['main-page__aside__list']}>
          <WordsOnMainPage words={words} />
        </div>
        <Pagination
          queryString={queryString}
          setQueryString={setQueryString}
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
