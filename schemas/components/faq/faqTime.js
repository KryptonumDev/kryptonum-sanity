export default {
  name: "faq_Time",
  title: "FAQ Time",
  type: 'object',
  fields: [
    {
      name: 'question',
      type: 'string'
    },
    {
      name: 'img',
      type: 'image'
    },
    {
      name: 'heading',
      type: 'markdown'
    },
    {
      name: 'paragraph',
      type: 'markdown'
    },
    {
      name: 'cta',
      type: 'cta'
    },
    {
      name: 'listHeading',
      type: 'string'
    },
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'string',
        }
      ]
    },
  ],
}


