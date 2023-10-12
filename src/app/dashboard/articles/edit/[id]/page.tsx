import DashboardLayout from '@/app/dashboard/layout'

export default function EditArticle({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout>
      <h1>edit articles {params.id}</h1>
    </DashboardLayout>
  )
}
