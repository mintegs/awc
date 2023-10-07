'use client'

import CategoryForm from '@/components/forms/categoryForm'
import DashboardLayout from '@/components/layout/dashboard'
import AddCategory from '@/components/pages/categories/addCategory'
import CategoryList from '@/components/pages/categories/categoryList'

export default function Categories() {
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
          <AddCategory />
        </div>
      </div>
      <CategoryList />
      <CategoryForm />
    </DashboardLayout>
  )
}
