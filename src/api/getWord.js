import axios from 'axios';

<<<<<<< HEAD
const { REACT_APP_GET_WORD_URL } = process.env;

export const getWord = async (word) => {
  const res = await axios.get(`${REACT_APP_GET_WORD_URL}${word}`);
=======
export const getWord = async (word) => {
  const res = await axios.get(`http://localhost:8080/api/dictionary/search/${word}`);
>>>>>>> develop
  return res.data;
};
