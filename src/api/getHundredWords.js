import axios from 'axios';

export const getHundredWords = () => {
  return (
    axios.get(`http://localhost:8080/api/dictionary/pages/`,
      {
        params: {
          pages: 1,
          pageSize: 100
      }
    }
  ).then(res => res.data)
)}
