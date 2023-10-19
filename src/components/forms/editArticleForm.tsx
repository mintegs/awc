'use client'
import { Form, Formik } from 'formik'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import * as yup from 'yup'
import { useEditArticleMutation } from '../hooks/mutations/mutateArticle'
import { useArticle } from '../hooks/queries/articles'
import useCategories from '../hooks/queries/categories'
import ComboBoxSkeleton from '../pages/skeletons/comboBoxSkeleton'
import ComboBox from '../shared/comboBox'
import Input from '../shared/input'
import MarkdownEditor from '../shared/markdownEditor'
import removeMarkdown from '../shared/markdownEditor/convertToText'
import customToaster from '../shared/notify'
import SpinnerSvg from '../svg/spinnerSvg'

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
  category: yup.string().required('دسته مقاله را وارد کنید'),
  content: yup
    .string()
    .required()
    .test({
      message: 'متن کمتر از ۵۰۰ کاراکتر نمی‌تواند باشد',
      test: (value) => removeMarkdown(value).length > 500,
    }),
})

export default function EditArticleForm() {
  const { categories, loading } = useCategories()
  const params = useParams()
  const { article, loading: articleLoading } = useArticle(params.id as string)
  const { mutate, isLoading } = useEditArticleMutation()
  const { push } = useRouter()

  if (articleLoading) {
    return <p>loading article...</p>
  }

  console.log('article', article)

  return (
    <>
      <Formik
        initialValues={{
          id: article?._id,
          image: article?.image,
          title: article?.title,
          category: article?.category?._id,
          content: article?.content,
        }}
        validationSchema={articleSchema}
        onSubmit={async (values) => {
          mutate(values, {
            onSuccess: () => {
              push('/dashboard/articles')
            },
            onError: (error: any) => {
              // Set notify
              customToaster(error.response.data.message, 'bg-red-700')
            },
          })
        }}
      >
        {({ dirty, isValid, values }) => {
          console.log('values', values, dirty, isValid)
          return (
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
                        !isValid || isLoading ? 'cursor-not-allowed' : ''
                      } h-10 w-32 bg-blue-600 flex justify-center items-center font-medium text-base rounded-md group text-white border-2 border-blue-600 hover:bg-slate-700 hover:text-blue-400 hover:border-blue-500 transition duration-200 shadow-lg`}
                      disabled={!isValid || isLoading}
                    >
                      {isLoading ? (
                        <SpinnerSvg classNames={`h-5 w-5 text-white`} />
                      ) : (
                        'ویرایش'
                      )}
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
          )
        }}
      </Formik>
    </>
  )
}
