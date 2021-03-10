import React, { useContext, useEffect, useState } from 'react';
import { wordsActions } from '../../actions/wordsActions';
import { getHundredWords } from '../../api/getHundredWords';
import PagesForm from '../../components/Forms/PagesForm/PagesFrom';
import SearchForm from '../../components/Forms/SearchForm/SearchForm';
import WordsOnMainPage from '../../components/WordsOnMainPage/WordsOnMain';
import { DispatchWordsContext, StateWordsContext } from '../../context/WordsContext';
import './main.scss';
import { Table } from '../../components/Tabs/Table';
import { Subscription } from '../../components/Tabs/Subsccription';
import { Tabs } from '../../components/Tabs/Tabs';


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
    var undeline = document.querySelector('.underline');
    const setActiveTagIndexHandler = (id) => {
       setActiveTabIndex(id)
       undeline.style.transform = `translateX(${100*(id-1)}%)`;
    }
    return  (
        <div className="main-page">
            <div className="main-page__item">
                <SearchForm />
                <WordsOnMainPage words={firstHundredWords} />
                <PagesForm />
            </div>
            <div className="main-page__item">
               <Tabs 
                    activeTabId={activeTabIndex} 
                    onClick={setActiveTagIndexHandler}
                    tabsConfigArr={[
                        {
                            id: 1, 
                            label: "Table", 
                            content: <Table />
                        },
                        {
                            id: 2, 
                            label: "Subscription",
                            content: <Subscription />
                        },
                    ]} 
                />
            </div>
        </div>
    )
};

export default Main;
