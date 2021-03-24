import axios from 'axios';

export const getWord = async (word) => {
  const res = await axios.get(`http://localhost:8080/api/dictionary/search/${word}`);
  return res.data;
};
