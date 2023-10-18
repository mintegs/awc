import { Form, Formik } from 'formik'
import Link from 'next/link'
import useCategories from '../hooks/queries/categories'
import ComboBoxSkeleton from '../pages/skeletons/comboBoxSkeleton'
import ComboBox from '../shared/comboBox'
import Input from '../shared/input'
import MarkdownEditor from '../shared/markdownEditor'

export default function CreateArticleForm() {
  const { categories, loading } = useCategories()

  return (
    <>
      <Formik
        initialValues={{
          image: '',
          title: '',
          category: '',
          content: '',
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log(values)
          //   window.location.reload()
          //   window.document.cookie = 'username=John Doe'
        }}
      >
        {({ dirty, isValid, isSubmitting }) => (
          <>
            <Form>
              <div className='mt-4'>
                <div className='mb-6'>
                  <Input
                    name='image'
                    type='url'
                    placeholder='عکس مقاله را وارد کنید'
                    isLtr
                    withLabel
                    label='عکس'
                    classNames='w-full rounded-md border border-slate-700 py-3 px-5 bg-slate-700  text-white text-base outline-none focus-visible:shadow-none focus:border-blue-500 focus:border-2 transition'
                  />
                </div>
                <div className='mb-6'>
                  <Input
                    name='title'
                    type='text'
                    withLabel
                    label='عنوان'
                    placeholder='عنوان مقاله را وارد کنید'
                    classNames='w-full rounded-md border border-slate-700 py-3 px-5 bg-slate-700  text-white text-base outline-none focus-visible:shadow-none focus:border-blue-500 focus:border-2 transition'
                  />
                </div>
                <div className='mb-6'>
                  {loading ? (
                    <ComboBoxSkeleton
                      title='دسته بندی'
                      placeholder='دسته بندی را وارد کنید'
                    />
                  ) : (
                    <ComboBox
                      data={categories}
                      filterField='title'
                      label='دسته بندی'
                      name='category'
                      placeholder='دسته بندی را وارد کنید'
                    />
                  )}
                </div>
                <div className='mb-6'>
                  <MarkdownEditor name='content' />
                </div>
                <div className='flex justify-between'>
                  <button
                    type='submit'
                    className='h-10 w-32 bg-blue-600 flex justify-center items-center font-medium text-base rounded-md group text-white border-2 border-blue-600 hover:bg-slate-700 hover:text-blue-400 hover:border-blue-500 transition duration-200 shadow-lg'
                  >
                    ثبت
                  </button>
                  <Link
                    href='/dashboard/articles'
                    className='h-10 w-32 bg-yellow-600 flex justify-center items-center font-medium text-base rounded-md group text-white border-2 border-yellow-600 hover:bg-slate-700 hover:text-yellow-400 hover:border-yellow-500 transition duration-200 shadow-lg'
                  >
                    انصراف
                  </Link>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  )
}
