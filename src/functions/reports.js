import axios from 'axios';

export const getReports = () => 
    axios.get('http://localhost:3001/reports')
        .then( res => res.data);


export const postNewReport = (message) => 
    axios.post('http://localhost:3001/reports', {
           user: "John Doe",
           image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
           message: message,
           time: "5 minutes ago"
        })
        .then(res => res.data);