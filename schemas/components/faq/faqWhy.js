export default {
  name: "faq_Why",
  title: "FAQ Why",
  type: 'object',
  fields: [
    {
      name: 'question',
      type: 'string'
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
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'string',
        }
      ]
    },
    {
      name: 'summary',
      type: 'markdown'
    },
  ],
}