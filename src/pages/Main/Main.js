import React, { useContext, useEffect, useState } from 'react';
import { wordsActions } from '../../actions/wordsActions';
import { DispatchWordsContext, StateWordsContext } from '../../context/WordsContext';
import { getHundredWords } from '../../api/getHundredWords';
import { PagesForm, 
         SearchForm, 
         Subscription, 
         WordsOnMainPage, 
} from '../../components/index';
import { Tabs, Table } from '../../common/index';

import './main.scss';


const Main = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const store = useContext(StateWordsContext);
  const dispatch = useContext(DispatchWordsContext);
  const { firstHundredWords } = store;
  useEffect(() => {
    getHundredWords().then(data =>
      dispatch({
        type: wordsActions.FETCH_FIRST_HUNDRED_WORDS,
        payload: data.details
      })
    )
  }, [dispatch]);
  const handleSetActiveTagIndex = (id) => {
    setActiveTabIndex(id)
  };
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
          tabsConfigArr={[
            {
              id: 1,
              label: "Table",
              content: <Table />,
            },
            {
              id: 2,
              label: "Subscription",
              content: <Subscription />
            }
          ]}
        />
      </div>
    </div>
  )
};

export default Main;
