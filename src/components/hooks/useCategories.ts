'use client'
import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

export default function useCategories() {
  const { data, error } = useSWR(
    'categories',
    () => {
      if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
        return fetcher('https://my-json-server.typicode.com/typicode/demo').get(
          '/posts'
        )
      }

      return fetcher().get('/admin/categories')
    },
    {
      errorRetryCount: 3,
      refreshInterval: 1000 * 60 * 60,
    }
  )

  return { categories: data?.data, error, loading: !data && !error }
}
