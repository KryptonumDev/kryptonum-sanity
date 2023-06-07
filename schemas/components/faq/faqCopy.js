export default {
  name: "faq_Copy",
  title: "FAQ Copy",
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
      name: 'summary',
      type: 'markdown'
    },
  ],
}