import axios from 'axios';

export const getInformation = () => {
    return axios
        .get('http://localhost:3001/information')
        .then( res => {
            return res.data;
        })
    }