'use client'
import { ErrorMessage, Field } from 'formik'

interface Props {
  name: string
  type?: string
  withLabel?: boolean
  label?: string
  isLtr?: boolean
  props?: object
  placeholder?: string
  classNames?: string
}

export default function Input({
  name,
  type = 'text',
  withLabel = false,
  isLtr = false,
  label,
  placeholder,
  classNames = 'form-input',
}: Props) {
  return (
    <>
      {withLabel && label ? (
        <label
          htmlFor={name}
          className='block mb-2'
        >
          <span className='text-base text-gray-300 font-bold capitalize'>
            {label}
          </span>
        </label>
      ) : null}
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`${classNames} ${isLtr ? 'ltr' : ''}`}
      />
      <ErrorMessage name={name}>
        {(msg: any) => (
          <span className='text-red-500 text-sm block'>{msg}</span>
        )}
      </ErrorMessage>
    </>
  )
}
