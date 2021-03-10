import React, { useContext, useEffect, useState } from 'react';
import { wordsActions } from '../../actions/wordsActions';
import { getHundredWords } from '../../api/getHundredWords';
import PagesForm from '../../components/Forms/PagesForm/PagesFrom';
import SearchForm from '../../components/Forms/SearchForm/SearchForm';
import WordsOnMainPage from '../../components/WordsOnMainPage/WordsOnMain';
import { DispatchWordsContext, StateWordsContext } from '../../context/WordsContext';
import { Tab } from '../../components/Tab/Tab';
import './main.scss';
import { Table } from '../../components/Tabs/Table';
import { Subscription } from '../../components/Tabs/Subsccription';


const Main = () => {
    const [tabsSwitch, setTabsSwitch] = useState(1);
    const store = useContext(StateWordsContext);
    const dispatch = useContext(DispatchWordsContext);
    const {firstHundredWords} = store;
    useEffect(() => {
        getHundredWords().then(data => 
            dispatch({
                type: wordsActions.FETCH_FIRST_HUNDRED_WORDS,
                payload: data.details
            })
        )
    }, [dispatch]);
    const setIndexForTab = (index) => {
        setTabsSwitch(index)
    }
   
    return  (
        <div className="main-page">
            <div className="main-page__item">
                <SearchForm />
                <WordsOnMainPage words={firstHundredWords} />
                <PagesForm />
            </div>
            <div className="main-page__item tabs-box">
                <div className="tabs-box__links">
                    <Tab onClick={setIndexForTab} index={1} num={tabsSwitch}>Table</Tab>
                    <Tab onClick={setIndexForTab} index={2} num={tabsSwitch}>Subscrioption</Tab>
                    <div className={
                        tabsSwitch === 2 ? "move-line-right underline" : 
                        tabsSwitch === 1 ? "move-line-left underline": "underline"
                        }></div>
                </div>
                
                <div className="tabs-box__conntent">
                    <Table index={tabsSwitch} />
                    <Subscription index={tabsSwitch} />
                </div>
                    
            </div>
        </div>
    )
};

export default Main;
