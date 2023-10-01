import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

export default function fetcher(baseURL: string) {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL,
  })

  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig<any>) => {
      config.withCredentials = true
      return config
    },
    (error: AxiosError) => {
      throw error
    }
  )

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse<any, any>) => response,
    (error: AxiosError) => {
      throw error
    }
  )

  return axiosInstance
}
