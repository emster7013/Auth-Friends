// 1. authorize calls with authoriation header
// 2. set url prefix to our server

import axios from 'axios';

export const axiosWithAuth= () =>{
const token= localStorage.getItem('token');

return axios.create({
headers: {
Authorization: token,
},
baseURL: 'http://localhost:5000/api'
})
};