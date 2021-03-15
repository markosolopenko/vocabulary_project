import React, { useContext, useState } from 'react';

import { DispatchWordsContext } from '../../../context/WordsContext';
import { wordsActions } from '../../../actions/wordsActions';
import { getWord } from '../../../api/getWord';

import s from './serachForm.module.scss';


export const SearchForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useContext(DispatchWordsContext);
  const { FETCH_WORD } = wordsActions;
  const handleChange = (event) => {
    setValue(event.target.value);
  }  
  const hanldeSearchClick = () => {
    getWord(value).then(data =>  
      dispatch({
        type: FETCH_WORD,
        payload: data
      })
    );
  };
  return (
    <div className={s["search-form"]}>
      <input
        onChange={handleChange}
        className={s["search-form__input"]}
        placeholder="Search Word"
      />
      <button type="submit" onClick={hanldeSearchClick}>Search</button>
    </div>
  )
}
