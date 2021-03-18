import React, { useEffect, useState } from 'react';

import { wordsActionTypes } from '../../actions/wordsActionTypes';
import { getWords } from '../../api/getWords';
import { SearchForm,  
         Subscription, 
         WordsOnMainPage, 
} from '../../components/index';
import { Tabs, Table } from '../../common/index';

import { useDispatch, useSelector } from 'react-redux'

import s from './Main.module.scss';

export const Main = () => {
  const defaultTabId = 1;
  const { FETCH_FIRST_HUNDRED_WORDS, GET_AMOUNT_OF_PAGES } = wordsActionTypes;
  const [activeTabIndex, setActiveTabIndex] = useState(defaultTabId);
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const { wordsReducer } = store;
  const { words, wordJson, page } = wordsReducer;
  const configArr = [
    {
      id: 1,
      label: "Табличка",
      content: <Table wordJson={wordJson} />
    },
    {
      id: 2,
      label: "Опис",
      content: <Subscription />
    },
  ];
  useEffect(() => {
    getWords(page).then(data => {
      return ( 
        dispatch({ type: FETCH_FIRST_HUNDRED_WORDS, payload: data.details }),
        dispatch({ type: GET_AMOUNT_OF_PAGES, payload: { value: data.pagesCount } })
      )
    }).catch(err => console.log("Something went wrong...", new Error(err)));
    
  }, [page, FETCH_FIRST_HUNDRED_WORDS, GET_AMOUNT_OF_PAGES, dispatch]);
  const handleSetActiveTagIndex = (id) => {
    setActiveTabIndex(id)
  };
  return (
    <div className={s['main-page']}>
      <div className={s['main-page__aside']}>
        <SearchForm />
        <div className={s['main-page__aside__list']}>
          <WordsOnMainPage words={words} />
        </div>
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
  )
};
