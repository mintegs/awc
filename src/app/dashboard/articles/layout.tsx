import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مقالات',
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
