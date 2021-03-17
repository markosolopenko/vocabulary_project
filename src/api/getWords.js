import axios from 'axios';

export const getWords = async (page) => {
  const url = `http://localhost:8080/api/dictionary/pages/${page}?pageSize=100`;
  const res = await axios.get(url);
  return res.data;
}
