import axios from 'axios';
const customAxios = axios.create({
//   baseURL: baseurl//"52.78.246.108:8080 ,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('login-token')}`,
  },
});

export default customAxios;