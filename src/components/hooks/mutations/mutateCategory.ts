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
        const previousCategories = queryClient.getQueryData(['categories'])
        queryClient.setQueryData(['categories'], (old: any) => [
          ...old,
          data.data,
        ])

        return { previousCategories }
      },
    }
  )
}

export function useEditCategoryMutation() {
  const queryClient = useQueryClient()

  return useMutation(
    (payload: payload) => {
      return fetcher().put(`/admin/categories${payload.id}`, payload)
    },
    {
      onSuccess(data, variables, context) {
        const previousCategories = queryClient.getQueryData(['categories'])
        console.log('data', data)
        queryClient.setQueryData(['categories'], (old: any) => {
          const data = old.filter((item: any) => {})
        })

        return { previousCategories }
      },
    }
  )
}
