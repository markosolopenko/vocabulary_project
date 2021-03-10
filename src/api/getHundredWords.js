import axios from 'axios';

export const getHundredWords = () => {
    return axios.get(`https://3ea79d198b72.ngrok.io/api/dictionary/pages/1?pageSize=100`)
        .then(res => res.data);
}