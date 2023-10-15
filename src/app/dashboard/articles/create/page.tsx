'use client'
import ArticleForm from '@/components/forms/createArticleForm'
import DashboardLayout from '@/components/layout/dashboard'

export default function CreateArticle() {
  return (
    <DashboardLayout>
      <section className='relative pb-5'>
        <div className='w-full bg-slate-800 rounded-md p-5'>
          <ArticleForm />
        </div>
      </section>
    </DashboardLayout>
  )
}
