'use client'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { Form, Formik } from 'formik'
import { useRef } from 'react'
import * as yup from 'yup'
import Input from '../shared/input'

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required('ایمیل خود را وارد کنید')
    .email('ایمیل وارد شده معتبر نمی‌باشد'),
})

export default function SignInForm() {
  const captchaRef = useRef<HCaptcha>(null)

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          captcha: '',
        }}
        validationSchema={signInSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          if (!values.captcha) captchaRef.current?.execute()
          else {
            console.log('val', values)
          }
        }}
      >
        {({ dirty, isValid, isSubmitting, setFieldValue, values }) => (
          <>
            <Form>
              <div className='mb-6'>
                <Input
                  name='email'
                  label='ایمیل'
                  withLabel
                  isLtr
                />
              </div>
              <div className='mb-6'>
                <HCaptcha
                  sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!}
                  languageOverride='fa'
                  onVerify={(token) => setFieldValue('captcha', token)}
                  onExpire={() => setFieldValue('token', '')}
                  ref={captchaRef}
                  theme='dark'
                  size='invisible'
                />
              </div>
              <div className='mb-6 w-full text-center items-center'>
                {values.captcha ? (
                  <button
                    title='ارسال'
                    type='submit'
                    className={`${
                      !(dirty && isValid) ? 'cursor-not-allowed' : ''
                    } w-1/2 rounded-md py-3 px-5 text-base shadow-md bg-green-700 hover:bg-green-500 text-white capitalize`}
                    disabled={!(dirty && isValid)}
                  >
                    ارسال
                  </button>
                ) : (
                  <button
                    title='اعتبار سنجی'
                    type='submit'
                    className={`${
                      !(dirty && isValid) ? 'cursor-not-allowed' : ''
                    } w-1/2 rounded-md py-3 px-5 text-base shadow-md bg-blue-700 hover:bg-blue-500 text-white capitalize`}
                    disabled={!(dirty && isValid)}
                  >
                    اعتبار سنجی
                  </button>
                )}
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  )
}
