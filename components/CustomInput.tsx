import React, { useMemo } from 'react'
import { MarkdownInput, MarkdownInputProps } from 'sanity-plugin-markdown'

export function CustomMarkdownInput(props) {
  const reactMdeProps: MarkdownInputProps['reactMdeProps'] =
    useMemo(() => {
      return {
        options: {
          toolbar: ['bold', 'italic', 'guide', 'link', 'ordered-list'],
          minHeight: '30px',
          placeholder: '**Highlighted** heading',
        },
      }
    }, [])

  return <MarkdownInput {...props} reactMdeProps={reactMdeProps} />
}