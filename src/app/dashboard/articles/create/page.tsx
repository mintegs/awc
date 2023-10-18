'use client'
import CreateArticleForm from '@/components/forms/createArticleForm'
import DashboardLayout from '@/components/layout/dashboard'

export default function CreateArticle() {
  return (
    <DashboardLayout>
      <section className='relative'>
        <div className='w-full p-5'>
          <CreateArticleForm />
        </div>
      </section>
    </DashboardLayout>
  )
}
