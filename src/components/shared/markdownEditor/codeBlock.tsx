'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function CodeBlock({
  node,
  inline,
  className,
  children,
  ...props
}: any) {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <SyntaxHighlighter
      // eslint-disable-next-line react/no-children-prop
      children={String(children).replace(/\n$/, '')}
      style={materialDark}
      language={match[1]}
      PreTag='div'
      {...props}
      customStyle={{
        padding: 10,
      }}
    />
  ) : (
    <code
      className={className}
      {...props}
    >
      {children}
    </code>
  )
}
