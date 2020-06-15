import { AxiosRequestConfig, AxiosResponse } from 'axios'

export const authRequestInterceptor = [
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = localStorage.getItem('auth_jwt') || ''
    console.log('toookennnn = ', token)
    if (token !== '') {
      config.headers['AUTH-JWT'] = token
    }
    return config
  },
  (error: AxiosResponse): Promise<any> => Promise.reject(error)
]
