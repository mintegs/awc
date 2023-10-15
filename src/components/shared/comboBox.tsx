'use client'
import { Combobox } from '@headlessui/react'
import { ErrorMessage, Field, FieldProps } from 'formik'
import { useState } from 'react'

interface Props {
  name: string
  label?: string
  data: any[]
  placeholder?: string
  filterField?: string
}

export default function ComboBox({
  name,
  label,
  placeholder,
  filterField,
  data,
}: Props) {
  const [query, setQuery] = useState('')

  return (
    <>
      <Field
        id={name}
        name={name}
      >
        {({ field, form }: FieldProps) => {
          const filtered =
            query === ''
              ? data
              : data.filter((item: any) => {
                  return item[filterField as string]
                    .toLowerCase()
                    .includes(query.toLowerCase())
                })
          return (
            <>
              <Combobox
                as='div'
                className='bg-gray-500/50 p-2 rounded-md'
                value={field.value}
                onChange={(value) =>
                  form.setFieldValue(name, Object.values(value)[0] as string)
                }
              >
                <label
                  htmlFor={name}
                  className='block mb-2'
                >
                  <span className='text-gray-300 text-base font-bold capitalize'>
                    {label}
                  </span>
                </label>
                <Combobox.Input
                  id={name}
                  className='form-input'
                  displayValue={(value: any) =>
                    value === ''
                      ? ''
                      : (Object.values(
                          data.filter(
                            (item) => item[Object.keys(item)[0]] === value
                          )[0]
                        )[1] as string)
                  }
                  onChange={(event) => {
                    if (event.target.value === '' && field.value !== '')
                      form.setFieldValue(name, '')
                    setQuery(event.target.value)
                  }}
                  placeholder={placeholder}
                  autoComplete='off'
                />
                <div className='mt-2 max-h-[7.5rem] overflow-y-auto'>
                  <Combobox.Options static={field.value !== '' ? false : true}>
                    {filtered.map((item: any) => (
                      <Combobox.Option
                        key={Object.values(item)[0] as string}
                        value={item}
                      >
                        {({ active }) => (
                          <div
                            className={`${
                              active
                                ? 'bg-gray-500/75 text-gray-100'
                                : 'text-gray-400'
                            } p-2 cursor-pointer rounded-md`}
                          >
                            {Object.values(item)[1] as string}
                          </div>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </div>
              </Combobox>
            </>
          )
        }}
      </Field>
      <ErrorMessage name={name}>
        {(msg: any) => (
          <span className='text-red-500 text-sm block'>{msg}</span>
        )}
      </ErrorMessage>
    </>
  )
}
