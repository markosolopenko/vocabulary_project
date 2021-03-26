import axios from 'axios';

const { REACT_APP_GET_WORDS_URL } = process.env;

export const getWords = async (page) => {
  const url = `${REACT_APP_GET_WORDS_URL}${page}?pageSize=100`;
  const res = await axios.get(url);
  return res.data;
};
