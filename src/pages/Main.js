import React, { useContext, useEffect } from 'react';
import { wordsActions } from '../actions/wordsActions';
import { getHundredWords } from '../api/getHundredWords';
import PagesForm from '../components/Forms/PagesForm/PagesFrom';
import SearchForm from '../components/Forms/SearchForm/SearchForm';
import WordsOnMainPage from '../components/WordsOnMainPage/WordsOnMain';
import { DispatchWordsContext, StateWordsContext } from '../context/WordsContext';

const Main = () => {
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
   
    return  (
        <div className="main-page">
            <SearchForm />
            <WordsOnMainPage words={firstHundredWords} />
            <PagesForm />
        </div>
    )
};

export default Main;