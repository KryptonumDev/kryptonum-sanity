import React from 'react'

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
          title: 'H2',
          value: 'h2',
          component: ({ children }) => <h2 style={{fontWeight: 400, margin: 0}}>{children}</h2>
        },
        {
          title: 'H3',
          value: 'h3',
          component: ({ children }) => <h3 style={{fontWeight: 400, margin: 0}}>{children}</h3>
        },
        {
          title: 'H4',
          value: 'h4',
          component: ({ children }) => <h4 style={{fontWeight: 400, margin: 0}}>{children}</h4>
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
        ]
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
      type: 'ctaSection',
    }
  ]
}