import React, { useContext, useEffect, useState } from 'react';
import { wordsActions } from '../../actions/wordsActions';
import { DispatchWordsContext, StateWordsContext } from '../../context/WordsContext';
import { getHundredWords } from '../../api/getHundredWords';
import { PagesForm, 
         SearchForm, 
         Subscription, 
         WordsOnMainPage, 
} from '../../components/index';
import { Tabs, Table, Conjugation } from '../../common/index';
import './main.scss';


export const Main = () => {
  const configArr = [
    {
      id: 1,
      label: "Table",
      // content: <Table />,
    },
    {
      id: 2,
      label: "Subscription",
      content: <Subscription />
    }
  ];
  const { FETCH_FIRST_HUNDRED_WORDS } = wordsActions;
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const store = useContext(StateWordsContext);
  const dispatch = useContext(DispatchWordsContext);
  const { firstHundredWords, wordJson } = store;
  useEffect(() => {
    getHundredWords().then(data =>
      dispatch({
        type: FETCH_FIRST_HUNDRED_WORDS,
        payload: data.details
      })
    );
  }, []);
  const handleSetActiveTagIndex = (id) => {
    setActiveTabIndex(id)
  };
  console.log(wordJson);
  return (
    <div className="main-page">
      <div className="main-page__item">
        <SearchForm />
        <WordsOnMainPage words={ firstHundredWords } />
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
