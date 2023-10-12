'use client'
import DashboardLayout from '@/components/layout/dashboard'

export default function EditArticle({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout>
      <h1>edit article {params.id}</h1>
    </DashboardLayout>
  )
}
