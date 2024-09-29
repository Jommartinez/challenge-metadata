import axios from 'axios'

const APIKEY = import.meta.env.VITE_API_KEY

const instance = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  params: {
    apikey: APIKEY
  },
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.response.use(
  response => response,
  error => {
    console.error('Axios error:', error)
    return Promise.reject(error)
  },
)

export default instance
