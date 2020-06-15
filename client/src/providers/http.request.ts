import axios, { AxiosInstance } from 'axios'
import { authRequestInterceptor } from './interceptors/request.interceptor'
import { serializeResponseInterceptor } from './interceptors/response.interceptor'
interface IHttpRequest {
  fetch(endPoint: string, data: object): Promise<any>
  download(endPoint: string, data: object): Promise<any>
  post(endPoint: string, data: object, config: object): Promise<any>
  put(endPoint: string, data: object, config: object): Promise<any>
  patch(endPoint: string, data: object, config: object): Promise<any>
  delete(endPoint: string, params?: object, data?: object): Promise<any>
  request(type: string, url: string, data: object): Promise<any>
}

class HttpRequest implements IHttpRequest {
  public axios: AxiosInstance
  private http: any
  private url: string

  constructor () {
    this.axios = axios
    this.url = process.env.VUE_APP_API || 'http://localhost:3000/api'

    this.http = axios.create({
      baseURL: this.url,
      // withCredentials: process.env.VUE_APP_WITH_CREDENTIALS === 'true',
      timeout: 120000
      // headers: this.header,
    })
    // The request interceptor is stack first use last executed
    this.http.interceptors.request.use(...authRequestInterceptor)

    // The request interceptor is queue first use first executed
    this.http.interceptors.response.use(...serializeResponseInterceptor)
  }

  public fetch (endPoint: string, data?: object): Promise<any> {
    return this.http.get(endPoint, {
      params: data
    })
  }

  public download (endPoint: string, data?: object): Promise<any> {
    return this.http.get(endPoint, {
      params: data,
      responseType: 'blob'
    })
  }

  public post (endPoint: string, data: object, config?: object): Promise<any> {
    return this.http.post(endPoint, data, config)
  }

  public put (endPoint: string, data: object, config?: object): Promise<any> {
    return this.http.put(endPoint, data, config)
  }

  public patch (endPoint: string, data: object, config?: object): Promise<any> {
    return this.http.patch(endPoint, data, config)
  }

  public delete (endPoint: string, params?: object, data?: object): Promise<any> {
    return this.http.delete(endPoint, { params, data })
  }

  public request (type: string, url: string, data: object): Promise<any> {
    let promise: any = null
    switch (type) {
      case 'GET': promise = axios.get(url, { params: data }); break
      case 'POST': promise = axios.post(url, data); break
      case 'PUT': promise = axios.put(url, data); break
      case 'PATCH': promise = axios.patch(url, data); break
      case 'DELETE': promise = axios.delete(url, data); break
    }
    return promise
  }
}

export default HttpRequest
