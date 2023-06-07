export default {
  name: "faq_Payment",
  title: "FAQ Payment",
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
      name: 'secondParagraph',
      type: 'markdown'
    },
    {
      name: 'thirdParagraph',
      type: 'markdown'
    },
    {
      name: 'text',
      type: 'string'
    },
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
    },
  ],
}


