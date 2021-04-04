import React, { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useQueryState } from 'react-router-use-location-state';

import { FETCH_FIRST_HUNDRED_WORDS, SET_PAGE, FETCH_WORD } from '../../actions';
import { getWords, getWordByPage, getWord } from '../../api';
import {
  SearchForm,
  Subscription,
  WordsOnMainPage,
  Noun,
  SurnameFirstType,
  SurnameSecondType,
  Surname,
  Adjective,
  Pronoun,
  NumbersSecond,
} from '../../components';
import { Tabs, Pagination, TableContainer } from '../../common';

import s from './Main.module.scss';

export const Main = () => {
  const conjuctions = ['називний', 'родовий', 'давальний', 'знахідний', 'орудний', 'місцевий', 'кличний'];
  const conjuctions1 = ['називний', 'родовий', 'давальний', 'знахідний', 'орудний', 'місцевий'];
  const [queryString, setQueryString] = useQueryState('page', 1);
  const defaultTabId = 1;
  const [activeTabIndex, setActiveTabIndex] = useState(defaultTabId);
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const { wordsReducer } = store;
  const { words, wordJson, page, amountOfPages } = wordsReducer;
  const tablesConfig = [
    {
      part: ['Noun'],
      content: <Noun wordJson={wordJson} conjuctions={conjuctions} />,
    },
    {
      part: ['SurnameFirstType'],
      content: <SurnameFirstType wordJson={wordJson} conjuctions={conjuctions} />,
    },
    {
      part: ['SurnameSecondType'],
      content: <SurnameSecondType wordJson={wordJson} conjuctions={conjuctions} />,
    },
    {
      part: ['Surname'],
      content: <Surname wordJson={wordJson} conjuctions={conjuctions} />,
    },
    {
      part: ['Adjective', 'Participle', 'AdjectivePronoun', 'OrdinalNumbers', 'NumbersFirst'],
      content: <Adjective wordJson={wordJson} conjuctions={conjuctions1} />,
    },
    {
      part: ['Pronoun'],
      content: <Pronoun wordJson={wordJson} conjuctions={conjuctions1} />,
    },
    {
      part: ['NumbersSecond'],
      content: <NumbersSecond wordJson={wordJson} conjuctions={conjuctions1} />,
    },
  ];
  const configArr = [
    {
      id: 1,
      label: 'Табличка',
      content: <TableContainer wordJson={wordJson} tablesConfigArray={tablesConfig} />,
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
          activePage={page}
          totalPages={amountOfPages}
          onChange={handleChangeForPaginationInput}
          queryString={queryString}
          setQueryString={setQueryString}
        />
      </div>
      <div className={s['main-page__content']}>
        <Tabs isFlexible activeTabId={activeTabIndex} onClick={handleSetActiveTagIndex} tabsConfigArr={configArr} />
      </div>
    </div>
  );
};
