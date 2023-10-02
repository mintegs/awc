'use client'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import Header from './header'
import Sidebar from './sidebar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarStatus, setSidebarStatus] = useState(false)
  const pathName = usePathname()

  useEffect(() => {
    if (sidebarStatus) {
      setSidebarStatus(false)
    }
  }, [pathName])

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
    </div>
  )
}
