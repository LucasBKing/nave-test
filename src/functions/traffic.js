import axios from 'axios';

export const getSales = () => 
    axios.get('http://localhost:3001/sales')
        .then( res => res.data);