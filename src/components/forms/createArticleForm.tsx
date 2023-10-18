import { Form, Formik } from 'formik'
import useCategories from '../hooks/queries/categories'
import ComboBox from '../shared/comboBox'
import Input from '../shared/input'
import MarkdownEditor from '../shared/markdownEditor'

export default function CreateArticleForm() {
  const { categories, loading } = useCategories()

  return (
    <>
      <Formik
        initialValues={{
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
                    name='title'
                    type='text'
                    label='عنوان'
                    placeholder='عنوان مقاله را وارد کنید'
                    classNames='w-full rounded-md border border-slate-700 py-3 px-5 bg-slate-700  text-white text-base outline-none focus-visible:shadow-none focus:border-blue-500 focus:border-2 transition'
                  />
                </div>
                <div className='mb-6'>
                  {loading ? (
                    <p>loading....</p>
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

                <button
                  type='submit'
                  className='h-10 w-32 bg-blue-600 flex justify-center items-center font-medium text-base rounded-md group text-white border-2 border-blue-600 hover:bg-slate-700 hover:text-blue-400 hover:border-blue-500 transition duration-200 shadow-lg'
                >
                  ثبت
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  )
}
