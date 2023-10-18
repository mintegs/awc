'use client'
import { ObjectId } from 'bson'
import { Form, Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as yup from 'yup'
import { useCreateArticleMutation } from '../hooks/mutations/mutateArticle'
import useCategories from '../hooks/queries/categories'
import ComboBoxSkeleton from '../pages/skeletons/comboBoxSkeleton'
import ComboBox from '../shared/comboBox'
import Input from '../shared/input'
import MarkdownEditor from '../shared/markdownEditor'
import customToaster from '../shared/notify'

const articleSchema = yup.object().shape({
  title: yup
    .string()
    .required('عنوان دسته را وارد کنید')
    .min(3, 'عنوان کمتر از ۳ کاراکتر نمی‌تواند باشد')
    .max(30, 'عنوان نباید از ۳۰ کاراکتر بیشتر باشد'),
  image: yup
    .string()
    .required('عکس مقاله را وارد کنید')
    .url('فرمت عکس نامعتبر است'),
  category: yup
    .string()
    .required()
    .test({
      message: 'دسته انتخاب شده معتبر نمی‌باشد',
      test: (value: string) => {
        return ObjectId.isValid(value)
      },
    }),
  content: yup
    .string()
    .required()
    .min(500, 'متن کمتر از ۵۰۰ کاراکتر نمی‌تواند باشد'),
})

export default function CreateArticleForm() {
  const { categories, loading } = useCategories()
  const { mutate, isLoading } = useCreateArticleMutation()
  const { push } = useRouter()

  return (
    <>
      <Formik
        initialValues={{
          image: '',
          title: '',
          category: '',
          content: '',
        }}
        validationSchema={articleSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log(values)
          mutate(values, {
            onSuccess() {
              // Change route /articles
              push('/dashboard/articles')
            },
            onError(error: any) {
              // Set submitting value
              setSubmitting(false)

              // Set notify
              customToaster(error.response.data.message, 'bg-red-700')
            },
          })
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
                    className={`${
                      !(dirty && isValid) ? 'cursor-not-allowed' : ''
                    } h-10 w-32 bg-blue-600 flex justify-center items-center font-medium text-base rounded-md group text-white border-2 border-blue-600 hover:bg-slate-700 hover:text-blue-400 hover:border-blue-500 transition duration-200 shadow-lg`}
                    disabled={!(dirty && isValid)}
                  >
                    ثبت
                  </button>
                  <Link
                    href='/dashboard/articles'
                    className='h-10 w-32 bg-yellow-600 flex justify-center items-center font-medium text-base rounded-md group text-white border-2 border-yellow-600 hover:bg-slate-700 hover:text-yellow-400 hover:border-yellow-500 transition duration-200 shadow-lg'
                  >
                    بازگشت
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
