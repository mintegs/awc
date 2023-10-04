import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'داشبورد',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
