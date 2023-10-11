'use client'
import fetcher from '@/lib/fetcher'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export default function useCategories() {
  const { data, error } = useQuery<any, AxiosError>({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await fetcher().get('/admin/categories')

      return data
    },
    retryOnMount: false,
  })

  return {
    categories: data.categories,
    loading: !data && !error,
    error,
  }
}
