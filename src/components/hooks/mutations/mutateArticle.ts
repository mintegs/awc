'use client'

import fetcher from '@/lib/fetcher'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface payload {
  id?: string
  title: string
  image: string
  category: string
  content: string
}

export function useCreateArticleMutation() {
  const queryClient = useQueryClient()

  return useMutation(
    (payload: payload) => {
      return fetcher().post('/user/articles', payload)
    },
    {
      onSuccess(data, variables, context) {
        const previousArticles = queryClient.getQueryData(['articles'])
        queryClient.setQueryData(['articles'], (old: any) => [
          ...old,
          data.data,
        ])

        return { previousArticles }
      },
    }
  )
}

export function useEditArticleMutation() {
  const queryClient = useQueryClient()

  return useMutation(
    (payload: payload) => {
      return fetcher().put(`/user/articles/${payload.id}`, payload)
    },
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['articles'] })
      },
    }
  )
}

export function useRemoveArticleMutation() {
  const queryClient = useQueryClient()

  return useMutation(
    (title: string) => {
      return fetcher().delete(`/user/articles/${title}`)
    },
    {
      onSuccess(data, variables: any) {
        const previousArticles = queryClient.getQueryData(['articles'])

        queryClient.setQueryData(['articles'], (old: any) =>
          old.filter((item: any) => item.title !== variables)
        )

        return { previousArticles }
      },
    }
  )
}
