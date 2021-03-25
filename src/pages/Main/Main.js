import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { useQueryState } from 'react-router-use-location-state';

import { FETCH_FIRST_HUNDRED_WORDS, SET_PAGE, FETCH_WORD } from '../../actions';
import { getWords, getWordByPage, getWord } from '../../api';
import { SearchForm, Subscription, WordsOnMainPage } from '../../components';
import { Tabs, Pagination } from '../../common';
=======

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
>>>>>>> develop

import s from './Main.module.scss';

export const Main = () => {
  const defaultTabId = 1;
  const [activeTabIndex, setActiveTabIndex] = useState(defaultTabId);
<<<<<<< HEAD
  const [queryString, setQueryString] = useQueryState('page', 1);
=======
>>>>>>> develop
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const { wordsReducer } = store;
  const { words, wordJson, page, amountOfPages } = wordsReducer;
  const configArr = [
    {
      id: 1,
      label: 'Табличка',
<<<<<<< HEAD
      content: <div>Hello</div>,
=======
      content: <Table wordJson={wordJson} />,
>>>>>>> develop
    },
    {
      id: 2,
      label: 'Опис',
      content: <Subscription />,
    },
  ];

  useEffect(() => {
<<<<<<< HEAD
    getWords(page).then((data) => {
      dispatch({
        type: FETCH_FIRST_HUNDRED_WORDS,
        payload: { details: data.details, amount: data.pagesCount },
      });
    });
=======
    getWords(page)
      .then((data) => {
        return (
          dispatch({ type: FETCH_FIRST_HUNDRED_WORDS, payload: data.details }),
          dispatch({ type: GET_AMOUNT_OF_PAGES, payload: { value: data.pagesCount } })
        );
      })
      .catch((err) => new Error(err));
>>>>>>> develop
  }, [page]);
  const handleSetActiveTagIndex = (id) => {
    setActiveTabIndex(id);
  };
  const handleChangeForPaginationInput = (pageNum) => {
    dispatch({ type: SET_PAGE, payload: { page: pageNum } });
<<<<<<< HEAD
  };
  const handleSearchButtonClick = (value) => {
    getWordByPage(value).then((data) => {
      dispatch({ type: SET_PAGE, payload: { page: data.pageNumber } });
      setQueryString(data.pageNumber);
    });
    getWord(value).then((data) => {
      dispatch({ type: FETCH_WORD, payload: data });
    });
=======
>>>>>>> develop
  };
  return (
    <div className={s['main-page']}>
      <div className={s['main-page__aside']}>
        <SearchForm onSearch={handleSearchButtonClick} />
        <div className={s['main-page__aside__list']}>
          <WordsOnMainPage words={words} />
        </div>
        <Pagination
<<<<<<< HEAD
          queryString={queryString}
          setQueryString={setQueryString}
=======
>>>>>>> develop
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
