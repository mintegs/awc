'use client'

import { Menu, Transition } from '@headlessui/react'
import { ErrorMessage, Field, FieldProps } from 'formik'
import { Fragment, useState } from 'react'
import {
  FaBold,
  FaCode,
  FaHeading,
  FaImages,
  FaItalic,
  FaLink,
  FaListUl,
  FaQuoteRight,
  FaUnderline,
} from 'react-icons/fa'
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuHeading6,
} from 'react-icons/lu'
import { RxDividerHorizontal } from 'react-icons/rx'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import BlockQuote from './blockQuote'
import codeBlock from './codeBlock'
import removeMarkdown from './convertToText'

interface Props {
  name: string
  isLtr?: boolean
  placeholder?: string
}

const editorButtons = [
  {
    name: 'heading',
    icon: <FaHeading size={15} />,
    child: [
      {
        name: 'heading 1',
        icon: <LuHeading1 size={40} />,
      },
      {
        name: 'heading 2',
        icon: <LuHeading2 size={35} />,
      },
      {
        name: 'heading 3',
        icon: <LuHeading3 size={30} />,
      },
      {
        name: 'heading 4',
        icon: <LuHeading4 size={25} />,
      },
      {
        name: 'heading 5',
        icon: <LuHeading5 size={20} />,
      },
      {
        name: 'heading 6',
        icon: <LuHeading6 size={15} />,
      },
    ],
  },
  {
    name: 'bold',
    icon: <FaBold size={15} />,
  },
  {
    name: 'italic',
    icon: <FaItalic size={15} />,
  },
  {
    name: 'link',
    icon: <FaLink size={15} />,
  },
  {
    name: 'blockquote',
    icon: <FaQuoteRight size={15} />,
  },
  {
    name: 'code',
    icon: <FaCode size={15} />,
  },
  {
    name: 'image',
    icon: <FaImages size={15} />,
  },
  {
    name: 'list',
    icon: <FaListUl size={15} />,
  },
  {
    name: 'underline',
    icon: <FaUnderline size={15} />,
  },
  {
    name: 'divider',
    icon: <RxDividerHorizontal size={15} />,
  },
]

export default function MarkdownEditor({ name, placeholder, isLtr }: Props) {
  const [preview, setPreview] = useState(false)
  const markdownComponents = { code: codeBlock, blockquote: BlockQuote }
  return (
    <>
      <Field
        id={name}
        name={name}
      >
        {({ field, form }: FieldProps) => {
          const actionButtons = (action: string) => {
            const editor: any = document.getElementById(name)
            const end = editor?.selectionEnd
            const start = editor?.selectionStart
            const textSelected = editor?.value.slice(start, end)
            const before = editor?.value.slice(
              0,
              start == 0 && textSelected == '' ? editor.value.length : start
            )
            const after = editor.value.slice(
              end == 0 && textSelected == '' ? editor.value.length : end
            )

            const createText = (text: string, action: string) => {
              if (text.trim() === '') {
                return action
              }
              return text.trim()
            }

            // Handle heading tag
            if (action.includes('heading')) {
              form.setFieldValue(
                name,
                (before == '' ? before : before + '\n') +
                  '#'.repeat(Number(action.split(/\s/)[1])) +
                  ' ' +
                  createText(textSelected, 'عنوان') +
                  after
              )
            }

            switch (action) {
              case 'bold':
                form.setFieldValue(
                  name,
                  before +
                    '**' +
                    createText(textSelected, 'متن تاکیدی') +
                    '** ' +
                    after
                )
                break

              case 'italic':
                form.setFieldValue(
                  name,
                  before +
                    '*' +
                    createText(textSelected, 'متن ناکیدی مورب') +
                    '* ' +
                    after
                )
                break

              case 'blockquote':
                form.setFieldValue(
                  name,
                  (before == '' ? before : before + '\n\n') +
                    '>' +
                    createText(textSelected, 'نقله قول') +
                    after
                )
                break

              case 'underline':
                form.setFieldValue(
                  name,
                  before +
                    '~~' +
                    createText(textSelected, 'متن خط کشیده شده') +
                    '~~ ' +
                    after
                )
                break

              case 'divider':
                form.setFieldValue(
                  name,
                  before + textSelected.trim() + '\n' + '***' + after
                )
                break

              case 'code':
                form.setFieldValue(
                  name,
                  (before == '' ? before : before + '\n') +
                    '``` language' +
                    '\n' +
                    createText(textSelected, 'کد خود را در اینجا وارد کنید') +
                    '\n' +
                    '```' +
                    after
                )
                break

              case 'list':
                form.setFieldValue(
                  name,
                  (before == '' ? before : before + '\n') +
                    '- ' +
                    createText(textSelected, 'آیتم لیست') +
                    after
                )
                break

              case 'link':
                form.setFieldValue(
                  name,
                  before +
                    '[' +
                    createText(textSelected, 'متن لینک') +
                    ']' +
                    '(لینک) ' +
                    after
                )
                break

              case 'image':
                form.setFieldValue(
                  name,
                  (before == '' ? before : before + '\n') +
                    `![${createText(textSelected, 'عنوان عکس')}]` +
                    '(url) \n' +
                    after
                )
                break

              default:
                break
            }

            editor.focus()
          }

          return (
            <div className='bg-slate-700 p-2 rounded-md'>
              {!preview ? (
                <div className='flex flex-row pl-2 pb-2 max-w-fit'>
                  {editorButtons.map((item) =>
                    !item.child ? (
                      <button
                        title={item.name}
                        key={item.name}
                        onClick={() => actionButtons(item.name)}
                        type='button'
                        className='text-gray-700 bg-gray-500 flex justify-center items-center hover:text-gray-300 rounded-md max-w-[2rem] p-1 ml-2 last:ml-0'
                      >
                        {item.icon}
                      </button>
                    ) : (
                      <Menu
                        key={item.name}
                        as='div'
                        className='relative inline-block text-left ml-2 last:ml-0'
                      >
                        <div>
                          <Menu.Button className='text-gray-700 bg-slate-700 flex justify-center items-center hover:text-gray-300 rounded-md max-w-[2rem] p-1'>
                            <FaHeading size={15} />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-100'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'
                        >
                          <Menu.Items className='absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            <div className='px-1 py-1'>
                              {item.child.map((itemChild, index) => (
                                <Menu.Item key={index + itemChild.name}>
                                  {({ active }) => (
                                    <button
                                      type='button'
                                      className={`${
                                        active
                                          ? 'bg-blue-500 text-gray-900'
                                          : 'text-white'
                                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                      onClick={() =>
                                        actionButtons(itemChild.name)
                                      }
                                    >
                                      {itemChild.icon}
                                    </button>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    )
                  )}
                </div>
              ) : null}
              <textarea
                id={name}
                rows={10}
                placeholder={placeholder}
                className={`w-full rounded-md border border-slate-600 py-3 px-5 bg-slate-600  text-white text-base outline-none focus-visible:shadow-none focus:border-blue-500 focus:border-2 transition ${
                  isLtr ? 'ltr' : ''
                } ${preview ? 'hidden' : ''}`}
                {...field}
              />
              <div
                className={`mb-6 max-w-full bg-gray-700 p-5 rounded-md max-h-56 overflow-y-auto border-b-2 border-gray-500 rounded-b-none  prose prose-invert prose-ul:list-disc prose-ul:pl-0 prose-ul:pr-[1.625em] prose-blockquote:border-none prose-blockquote:pl-0 prose-pre:bg-transparent prose-img:rounded-md prose-img:m-auto text-gray-100 ${
                  preview ? '' : 'hidden'
                }`}
              >
                <ReactMarkdown
                  components={markdownComponents}
                  remarkPlugins={[remarkGfm]}
                >
                  {form.values[name]}
                </ReactMarkdown>
              </div>
              <div className='flex justify-between items-center text-gray-400 text-sm font-bold pb-2'>
                <div>
                  <label
                    htmlFor='preview-toggle'
                    className={`relative inline-flex items-center ${
                      form.values[name].length === 0
                        ? 'cursor-not-allowed'
                        : 'cursor-pointer'
                    }`}
                  >
                    <span className='ml-3'>پیش نمایش</span>
                    <input
                      type='checkbox'
                      checked={preview}
                      onChange={() => {
                        if (form.values[name].length !== 0) setPreview(!preview)
                      }}
                      id='preview-toggle'
                      className='sr-only peer'
                    />
                    <div className="w-11 h-6 bg-gray-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className='flex justify-between'>
                  <span>
                    کاراکتر ({removeMarkdown(form.values[name]).length})
                  </span>
                  <span className='mr-1'>
                    کلمه (
                    {removeMarkdown(form.values[name]).length === 0
                      ? 0
                      : removeMarkdown(form.values[name]).split(/\s/).length}
                    )
                  </span>
                </div>
              </div>
            </div>
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
