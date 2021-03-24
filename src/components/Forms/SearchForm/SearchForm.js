import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { wordsActionTypes } from "../../../actions/wordsActionTypes";
import { getWord } from "../../../api/getWord";
import { getWordByPage } from "../../../api/getWordByPage";
import { ReactComponent as Search } from "../../../assets/search.svg";

import s from "./SerachForm.module.scss";

export const SearchForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { FETCH_WORD, SET_PAGE, FETCH_FIRST_HUNDRED_WORDS } = wordsActionTypes;
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSearchClick = () => {
    getWordByPage(value)
      .then((data) => {
        dispatch({ type: SET_PAGE, payload: { page: data.pageNumber } })
      }).catch((err) => new Error(err));
    getWord(value).then(data => {
      dispatch({ type: FETCH_WORD, payload: data });
    })
  };
  return (
    <div className={s["search-form"]}>
      <input
        onChange={handleChange}
        className={s["search-form__input"]}
        placeholder="Search Word"
      />
      <button
        type="submit"
        onClick={handleSearchClick}
        className={s["search-form__button"]}
      >
        <Search className={s["search-form__button__icon"]} />
      </button>
    </div>
  );
};
