'use client'
import useAuth from '@/components/hooks/useAuth'
import Loading from '@/components/shared/loading'
import { redirect, usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Header from './header'
import Sidebar from './sidebar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarStatus, setSidebarStatus] = useState(false)
  const pathName = usePathname()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (sidebarStatus) {
      setSidebarStatus(false)
    }
  }, [pathName])

  if (loading) {
    return <Loading />
  }

  if (!user) {
    redirect('/auth')
  } else if (
    user?.role !== 'ADMIN' &&
    process.env.NEXT_PUBLIC_NODE_ENV === 'production'
  ) {
    redirect('/403')
  }

  return (
    <div className='flex h-screen'>
      <Sidebar
        sidebarStatus={sidebarStatus}
        setSidebarStatus={setSidebarStatus}
      />
      <div className='flex flex-col flex-1 w-full'>
        <Header
          sidebarStatus={sidebarStatus}
          setSidebarStatus={setSidebarStatus}
        />
        <main className='h-full overflow-y-auto bg-slate-600'>
          <div className='container px-3 md:px-6 mx-auto mt-5'>{children}</div>
        </main>
      </div>
      <Toaster position='bottom-left' />
    </div>
  )
}
