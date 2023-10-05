'use client'

import DashboardLayout from '@/components/layout/dashboard'
import ArticleList from '@/components/pages/articles/articleList'
import Link from 'next/link'

export default function Articles() {
  return (
    <DashboardLayout>
      <div className='grid grid-cols-4 gap-4 mb-5'>
        <div className='col-span-4 md:col-span-3'>
          <div className='relative'>
            <input
              type='text'
              placeholder='جستجو'
              className='h-10 w-full search-input'
            />
          </div>
        </div>
        <div className='col-span-4 md:col-span-1'>
          <Link
            href='/dashboard/articles/create'
            className='h-10 w-full bg-blue-600 flex justify-center items-center font-medium text-base rounded-md group text-white border-2 border-blue-600 hover:bg-slate-700 hover:text-blue-400 hover:border-blue-500 transition duration-200 shadow-lg'
          >
            ثبت مقاله جدید
          </Link>
        </div>
      </div>
      <ArticleList />
    </DashboardLayout>
  )
}
