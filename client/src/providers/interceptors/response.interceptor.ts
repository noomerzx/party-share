// @ts-ignore
import humps from 'humps'
import { AxiosResponse, AxiosError } from 'axios'

export const serializeResponseInterceptor = [
  (response: AxiosResponse): Promise<any> => {
    if (!response || !response.data) {
      throw response
    }

    const res: any = humps.camelizeKeys(response.data)
    return Promise.resolve(res)
  },
  (error: AxiosResponse): Promise<any> => {
    if (!error.data) {
      throw error
    }
    const errorResponse = {
      message: error.data.message,
      errorCode: error.data.errorCode,
      errorMessage: error.data.errorMessage
    }
    return Promise.reject(errorResponse)
  }
]
