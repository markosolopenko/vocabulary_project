import React, { useContext, useState } from 'react';
import { DispatchWordsContext, StateWordsContext } from '../../../context/WordsContext';
import s from './serachForm.module.scss';
import { wordsActions } from '../../../actions/wordsActions';
import { getWord } from '../../../api/getWord';


export const SearchForm = () => {
  const [value, setValue] = useState('');
  const store = useContext(StateWordsContext);
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
