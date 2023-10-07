'use client'
import { Form, Formik } from 'formik'
import Input from '../shared/input'
import SpinnerSvg from '../svg/spinnerSvg'

export default function CategoryForm() {
  return (
    <div className='mt-5 text-right'>
      <Formik
        initialValues={{
          title: '',
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log('values')
        }}
      >
        {({ dirty, isValid, isSubmitting }) => {
          console.log('isSubmitting', isSubmitting)
          return (
            <>
              <Form>
                <div className='flex justify-between items-center'>
                  <Input
                    name='title'
                    type='text'
                    placeholder='عنوان'
                  />
                  <button
                    type='submit'
                    className='rounded-md border border-transparent bg-blue-700 mr-2 px-4 py-3 text-base font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                  >
                    {isSubmitting ? (
                      <SpinnerSvg classNames={`h-5 w-5 text-white`} />
                    ) : (
                      <></>
                    )}
                    ثبت
                  </button>
                </div>
              </Form>
            </>
          )
        }}
      </Formik>
    </div>
  )
}
