'use client'

import fetcher from '@/lib/fetcher'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface payload {
  id?: string
  title: string
}

export function useCreateCategoryMutation() {
  const queryClient = useQueryClient()

  return useMutation(
    (payload: payload) => {
      return fetcher().post('/admin/categories', payload)
    },
    {
      onSuccess(data, variables, context) {
        console.log('data', data)
        console.log('variables', variables)
        console.log('context', context)

        const previousCategories = queryClient.getQueryData(['categories'])
        queryClient.setQueryData(['categories'], (old: any) => [...old])

        return { previousCategories }
      },
    }
  )
}
