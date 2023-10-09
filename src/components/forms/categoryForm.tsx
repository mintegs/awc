'use client'
import fetcher from '@/lib/fetcher'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import customToaster from '../shared/notify'
import SpinnerSvg from '../svg/spinnerSvg'

const categorySchema = yup.object().shape({
  title: yup
    .string()
    .required('عنوان دسته را وارد کنید')
    .min(3, 'عنوان کمتر از ۳ کاراکتر نمی‌تواند باشد')
    .max(30, 'عنوان نباید از ۳۰ کاراکتر بیشتر باشد'),
})

export default function CreateCategoryForm({ data }: { data?: any }) {
  return (
    <div className='mt-5 text-right'>
      <Formik
        initialValues={{
          id: data?.id || undefined,
          title: data?.title || '',
        }}
        validationSchema={categorySchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true)
          try {
            const res = await fetcher().post('/admin/categories', {
              ...values,
            })

            // update list

            // toaster
            customToaster('دسته باموفقیت ثبت شد', true)
            setSubmitting(false)
            resetForm()
          } catch (error: any) {
            setSubmitting(false)

            // toaster
            customToaster(error.response.data.message)
          }
          console.log('values', values)
        }}
      >
        {({ dirty, isValid, isSubmitting, errors }) => {
          return (
            <>
              <Form>
                <div className='flex justify-between items-center'>
                  <Field
                    id='title'
                    name='title'
                    type='text'
                    placeholder='عنوان'
                    className='form-input'
                  />
                  <button
                    type='submit'
                    className={`${
                      !(dirty && isValid) ? 'cursor-not-allowed' : ''
                    } rounded-md border border-transparent bg-blue-700 mr-2 px-4 py-3 text-base font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                    disabled={!(dirty && isValid)}
                  >
                    {isSubmitting ? (
                      <SpinnerSvg classNames={`h-5 w-5 text-white`} />
                    ) : (
                      'ثبت'
                    )}
                  </button>
                </div>
                <div className='text-red-500 text-sm'>
                  {errors.title && <p>{errors['title'] as string}</p>}
                </div>
              </Form>
            </>
          )
        }}
      </Formik>
    </div>
  )
}
