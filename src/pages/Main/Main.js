import React, { useContext, useEffect, useState } from 'react';

import { wordsActions } from '../../actions/wordsActions';
import { DispatchWordsContext, StateWordsContext } from '../../context/WordsContext';
import { getWords } from '../../api/getWords';
import { PagesForm, 
         SearchForm, 
         Subscription, 
         WordsOnMainPage, 
} from '../../components/index';
import { Tabs, Table } from '../../common/index';
import './main.scss';


export const Main = () => {
  const { FETCH_FIRST_HUNDRED_WORDS } = wordsActions;
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const store = useContext(StateWordsContext);
  const dispatch = useContext(DispatchWordsContext);
  const { words, wordJson, page } = store;
  const configArr = [
    {
      id: 1,
      label: "Table",
      content: <Table wordJson={wordJson} />,
    },
    {
      id: 2,
      label: "Subscription",
      content: <Subscription />
    }
  ];
  const pageSize = 100;
  useEffect(() => {
    getWords({page, pageSize}).then(data =>
      dispatch({
        type: FETCH_FIRST_HUNDRED_WORDS,
        payload: data.details
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  const handleSetActiveTagIndex = (id) => {
    setActiveTabIndex(id)
  };
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
