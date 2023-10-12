import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ایجاد مقاله جدید',
}

export default function CreateArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
