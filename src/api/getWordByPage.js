import axios from 'axios';

const { REACT_APP_GET_WORD_BY_PAGE_URL } = process.env;

export const getWordByPage = async (word) => {
<<<<<<< HEAD
  const url = `${REACT_APP_GET_WORD_BY_PAGE_URL}${word}?pageSize=100`;
=======
  const url = `http://localhost:8080/api/dictionary/pages/search/${word}?pageSize=100`;
>>>>>>> develop
  const res = await axios.get(url);
  return res.data;
};
