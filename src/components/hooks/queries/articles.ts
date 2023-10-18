'use client'
import fetcher from '@/lib/fetcher'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export default function useArticles() {
  const { data, error } = useQuery<any, AxiosError>({
    queryKey: ['articles'],
    queryFn: async () => {
      const { data } = await fetcher().get('/admin/articles')

      return data.categories
    },
    retryOnMount: false,
  })

  return {
    articles: data,
    loading: !data && !error,
    error,
  }
}
