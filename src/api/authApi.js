import axios from 'axios'

const testApi = axios.create({
    baseURL:   'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type':'application/json',
        }
})

testApi.defaults.headers.common = {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  }
// testApi.interceptors.request.use((config)=>{
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
       
// })

export default testApi