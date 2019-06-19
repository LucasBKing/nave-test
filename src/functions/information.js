import axios from 'axios';

export const getInformation = () => 
    axios.get('http://localhost:3001/information')
        .then( res => res.data);
    