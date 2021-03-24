import axios from 'axios';

const { REACT_APP_GET_WORD_URL } = process.env;

export const getWord = async (word) => {
  const res = await axios.get(`${REACT_APP_GET_WORD_URL}${word}`);
  return res.data;
};
