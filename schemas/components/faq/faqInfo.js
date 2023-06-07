export default {
  name: "faq_Info",
  title: "FAQ Info",
  type: 'object',
  fields: [
    {
      name: 'question',
      type: 'string'
    },
    {
      name: 'paragraph',
      type: 'markdown'
    },
    {
      name: 'firstHeading',
      type: 'markdown'
    },
    {
      name: 'firstList',
      type: 'array',
      of: [
        {
          type: 'string',
        }
      ]
    },
    {
      name: 'secondHeading',
      type: 'markdown'
    },
    {
      name: 'secondList',
      type: 'array',
      of: [
        {
          type: 'string',
        }
      ]
    },
    {
      name: 'thirdHeading',
      type: 'markdown'
    },
    {
      name: 'thirdList',
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