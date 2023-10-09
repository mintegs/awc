import { Metadata } from 'next'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: 'home page',
  description: 'Generated by create next app',
}

export default function Home() {
  const cookieStore = cookies()
  const theme = cookieStore.get('mintegs_token')
  console.log('theme', theme)

  return <h1>home page</h1>
}
