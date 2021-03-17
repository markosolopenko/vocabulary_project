import axios from 'axios';

export const getWordByPage = async (word) => {
  const url = `http://localhost:8080/api/dictionary/pages/search/${word}?pageSize=100`
  const res = await axios.get(url);
  return res.data;
}
