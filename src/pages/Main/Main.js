import React, { useEffect, useState } from 'react';

import { wordsActions } from '../../actions/wordsActions';
import { getWords } from '../../api/getWords';
import { PagesForm, 
         SearchForm, 
         Subscription, 
         WordsOnMainPage, 
} from '../../components/index';
import { Tabs, Table } from '../../common/index';

import { useDispatch, useSelector } from 'react-redux'

import './main.scss';


export const Main = () => {
  const { FETCH_FIRST_HUNDRED_WORDS, GET_AMOUNT_OF_PAGES } = wordsActions;
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const { wordsReducer } = store;
  const { words, wordJson, page } = wordsReducer;
  const configArr = [
    {
      id: 1,
      label: "Table",
      content: <Table wordJson={wordJson} />
    },
    {
      id: 2,
      label: "Subscription",
      content: <Subscription />
    }
  ];
  const pageSize = 100;
  useEffect(() => {
    getWords({page, pageSize}).then(data => {
      return ( 
        dispatch({ type: FETCH_FIRST_HUNDRED_WORDS, payload: data.details }),
        dispatch({ type: GET_AMOUNT_OF_PAGES, payload: { value: data.pagesCount } })
      )
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  const handleSetActiveTagIndex = (id) => {
    setActiveTabIndex(id)
  };
  console.log(wordJson);
  return (
    <div className="main-page">
      <div className="main-page__item">
        <SearchForm />
        <WordsOnMainPage words={ words } />
        <PagesForm />
      </div>
      <div className="main-page__item">
        <Tabs
          activeTabId={activeTabIndex}
          onClick={handleSetActiveTagIndex}
          tabsConfigArr={configArr}
        />
      </div>
    </div>
  )
};
