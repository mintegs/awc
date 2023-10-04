'use client'
import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

export default function useAuth() {
  const { data, error } = useSWR('current_user', () => {
    if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
      return fetcher('https://jsonplaceholder.typicode.com/users').get('/1')
    }

    return fetcher().get('/user')
  })

  return { user: data?.data, error, loading: !data && !error }
}
