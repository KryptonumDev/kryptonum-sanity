export default {
  name: 'HeadingWithIconTitleDescriptionList',
  title: 'HeadingWithIconTitleDescripitonList',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown'
    },
    {
      name: 'IconTitleDescriptionList',
      type: 'array',
      of: [{type: 'ListWithOverflowIcon'}],
    }
  ]
}