export default {
  name: 'Slider',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown'
    },
    {
      name: 'slides',
      type: 'array',
      of: [{type: 'titleAndDescription'}]
    }
  ]
}