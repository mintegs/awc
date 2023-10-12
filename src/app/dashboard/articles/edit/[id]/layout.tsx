import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ویرایش مقاله',
}

export default function EditArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
