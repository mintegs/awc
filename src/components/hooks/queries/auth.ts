'use client'
import fetcher from '@/lib/fetcher'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export default function useAuth() {
  const { data: user, error } = useQuery<any, AxiosError>({
    queryKey: ['current_user'],
    queryFn: async () => {
      const { data } = await fetcher().get('user')

      return data
    },
    retryOnMount: false,
  })

  return {
    user: user,
    loading: !user && !error,
    error,
  }
}
