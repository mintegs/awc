'use client'
import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

export default function useAuth() {
  const { data, error } = useSWR('current_user', () => {
    return fetcher().get('/user')
  })

  console.log('data?.data', data?.data, data)

  return { user: data?.data, error, loading: !data && !error }
}
