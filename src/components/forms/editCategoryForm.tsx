'use client'
import { Field, Form, Formik } from 'formik'
import { Dispatch, SetStateAction } from 'react'
import * as yup from 'yup'
import { useEditCategoryMutation } from '../hooks/mutations/mutateCategory'
import customToaster from '../shared/notify'
import SpinnerSvg from '../svg/spinnerSvg'

const categorySchema = yup.object().shape({
  title: yup
    .string()
    .required('عنوان دسته را وارد کنید')
    .min(3, 'عنوان کمتر از ۳ کاراکتر نمی‌تواند باشد')
    .max(30, 'عنوان نباید از ۳۰ کاراکتر بیشتر باشد'),
})

export default function EditCategoryForm({
  data,
  closeModal,
}: {
  data: {
    _id: string
    title: string
  }
  closeModal: Dispatch<SetStateAction<boolean>>
}) {
  const { mutate } = useEditCategoryMutation()
  return (
    <div className='mt-5 text-right'>
      <Formik
        initialValues={{
          id: data._id,
          title: data.title,
        }}
        validationSchema={categorySchema}
        onSubmit={async (values, { setSubmitting }) => {
          mutate(values, {
            onSuccess: () => {
              setSubmitting(false)
              customToaster('دسته باموفقیت ویرایش شد', 'bg-green-700', true)
              closeModal(false)
            },
            onError: (error: any) => {
              // Set submitting value
              setSubmitting(false)

              // Set notify
              customToaster(error.response.data.message, 'bg-red-700')
            },
          })
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
