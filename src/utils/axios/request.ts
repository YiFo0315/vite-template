import axios from 'axios'
import store from '@/store'

const baseURL = 'https://www.fastmock.site/mock/ad09370256b46b63e2f4c02c6f609032/hzd'
const service = axios.create({
  baseURL // api 的 base_url
  // timeout: 30000 // 请求超时时间
})

service.interceptors.request.use(
  config => {
    const token = store.getters.getToken
    if (config.headers && token) {
      config.headers.Authorization = `Token ${ token }`
    }
    return config
  },
  error => {
    console.log(error) // for debug 11
    return Promise.reject(error)
  }
)

export default service
