const axios = require('axios').default;
const config = {
    headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` }
};
export const fetchData = (callback,url) => {
  axios.get(process.env.REACT_APP_BASE_URL+url,config).then((res)=>{
 callback(res)
 })
 }

 export const submitData = (callback,url,data) => {
  axios.post(process.env.REACT_APP_BASE_URL+url,data,config).then((res)=>{
 callback(res)
 })
 }
 