import axios from 'axios';

const axiosInstance = axios.create();
const { REACT_APP_GET_WORDS_URL } = process.env;

axiosInstance.interceptors.response.use(
  (response) => {
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  },
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
    if (error.response.status === 400 || error.response.status === 404) {
      window.location = '/main';
    }
  },
);

export const getWords = async (page) => {
  try {
    const url = `${REACT_APP_GET_WORDS_URL}${page}?pageSize=100`;
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (err) {
    return `Something wetn wrong${new Error(err)}`;
  }
};
