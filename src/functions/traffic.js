import axios from 'axios';

export const getSales = () => {
    return axios
        .get('http://localhost:3001/sales')
        .then( res => {
            return res.data;
        })
    }