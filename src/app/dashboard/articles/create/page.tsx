'use client'
import ArticleForm from '@/components/forms/createArticleForm'
import DashboardLayout from '@/components/layout/dashboard'

export default function CreateArticle() {
  return (
    <DashboardLayout>
      <section className='relative'>
        <div className='w-full p-5 bg-slate-500 rounded-md'>
          <ArticleForm />
        </div>
      </section>
    </DashboardLayout>
  )
}
