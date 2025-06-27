import axios from 'axios'

const httpService = axios.create({
  baseURL: '/api', 
  headers: {
    'Content-Type': 'application/json',
  },
})

// httpService.interceptors.request.use(
//   config => {
//     // const token = getTokenFromStorage() // اگه خواستی اضافه کن
//     // if (token) config.headers.Authorization = `Bearer ${token}`
//     return config
//   },
//   error => Promise.reject(error)
// )

export default httpService;
