import axios from 'axios';

export const getWords = ({page, pageSize}) => {
  const data = axios.get(`http://localhost:8080/api/dictionary/pages/${page}`, {
    params: {
      pageSize: 200
    }})
  .then(res => res.data);
  return data;
}
