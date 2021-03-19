import axios from 'axios';

export const getWord = (word) => {
  return axios.get(`http://localhost:8080/api/dictionary/search/${word}`).then((res) => res.data);
};
