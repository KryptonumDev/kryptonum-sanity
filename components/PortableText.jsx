import React from 'react'
import CustomInternalBlogLink from './CustomInternalBlogLink'

export default {
  name: 'portableText',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      styles: [
        {
          title: 'Normal',
          value: 'normal',
          component: ({ children }) => <span style={{fontWeight: 400}}>{children}</span>
        },
        {
          title: 'Large Paragraph',
          value: 'largeParagraph',
          component: ({ children }) => <p style={{fontSize: '1.1em', margin: 0}}>{children}</p>
        },
        {
          title: 'H2',
          value: 'h2',
          component: ({ children }) => <h2 style={{fontSize: '1.8em', fontWeight: 400, margin: 0}}>{children}</h2>
        },
        {
          title: 'H3',
          value: 'h3',
          component: ({ children }) => <h3 style={{fontSize: '1.5em', fontWeight: 400, margin: 0}}>{children}</h3>
        },
        {
          title: 'H4',
          value: 'h4',
          component: ({ children }) => <h4 style={{fontSize: '1.3em', fontWeight: 400, margin: 0}}>{children}</h4>
        },
      ],
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                initialValue: 'https://'
              },
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Link internal blog page',
            fields: [
              {
                name: 'href',
                type: 'string',
                title: 'URL',
                components: {
                  input: CustomInternalBlogLink
                }
              },
            ],
          }
        ],
      },
    },
    {
      type: 'image',
      fields: [
        {
          name: 'altText',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    },
    {
      type: 'quickForm',
    },
    {
      name: 'orderedList',
      type: 'orderedListArray',
      title: 'Ordered List',
    },
    {
      name: 'unorderedList',
      type: 'unorderedListArray',
      title: 'Unordered List',
    },
    {
      name: 'blog_Tiles',
      type: 'blog_TilesArray',
      title: 'Blog Tiles',
    },
    {
      name: 'SimpleGridList2Columns',
      type: 'SimpleGridList2Columns',
    },
    {
      name: 'SimpleGridImage2Columns',
      type: 'SimpleGridImage2Columns',
    },
    {
      name: 'TabSection',
      type: 'TabSection_Array',
    },
    {
      name: 'DetailedGrid',
      type: 'DetailedGrid',
    },
  ]
}