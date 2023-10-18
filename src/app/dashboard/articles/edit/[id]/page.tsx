'use client'
import EditArticleForm from '@/components/forms/editArticleForm'
import DashboardLayout from '@/components/layout/dashboard'

export default function EditArticle({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout>
      <section className='relative'>
        <div className='w-full p-5'>
          <EditArticleForm />
        </div>
      </section>
    </DashboardLayout>
  )
}
