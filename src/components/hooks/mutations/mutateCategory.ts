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
      return fetcher().put(`/admin/categories/${payload.id}`, payload)
    },
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['categories'] })
      },
    }
  )
}

export function useRemoveCategoryMutation() {
  const queryClient = useQueryClient()

  return useMutation(
    (id: string) => {
      return fetcher().delete(`/admin/categories/${id}`)
    },
    {
      onSuccess(data, variables: any) {
        const previousCategories = queryClient.getQueryData(['categories'])

        queryClient.setQueryData(['categories'], (old: any) =>
          old.filter((item: any) => item._id !== variables)
        )

        return { previousCategories }
      },
    }
  )
}
