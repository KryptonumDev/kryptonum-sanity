export default {
  name: 'HeadingWithIconTitleDescriptionList',
  title: 'Heading With Icon Title Descripiton List',
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