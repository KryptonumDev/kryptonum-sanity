export default {
  name: 'Development',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
    },
    {
      name: 'blocks',
      type: 'array',
      of: [{type: 'titleAndDescription'}]
    },
    {
      name: 'cardGrid',
      type: 'array',
      of: [{type: 'titleAndDescription'}],
    },
  ],
}
