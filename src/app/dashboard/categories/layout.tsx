import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'دسته بندی‌ها',
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
