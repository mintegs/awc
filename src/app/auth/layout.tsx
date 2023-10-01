import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مینتگس - ورود',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='fa'>
      <body>{children}</body>
    </html>
  )
}
