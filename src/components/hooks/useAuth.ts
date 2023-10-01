'use client'
import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

export default function useAuth() {
  const { data, error } = useSWR('current_user', () => {
    return fetcher().get('/user')
  })

  return { user: data?.data, error, loading: !data && !error }
}
