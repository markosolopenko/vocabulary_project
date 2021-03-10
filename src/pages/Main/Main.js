import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
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
    const handleChange = (event) => {

    }
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
                    <Tab onClick={setIndexForTab} index={1}>Table</Tab>
                    <Tab onClick={setIndexForTab} index={2}>Subscrioption</Tab>
                </div>
                
                <div className="tabs-box__conntent">
                    <Table classN={tabsSwitch === 1 ? "active" : "table-tab"} />
                    <Subscription classN={tabsSwitch === 2 ? "active": "subscription-tab"} />
                </div>
                    
            </div>
        </div>
    )
};

export default Main;