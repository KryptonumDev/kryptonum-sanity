export default {
  name: 'ProcessList',
  title: 'Process List',
  type: 'object',
  fields: [
    {
      name: 'ProcessList',
      type: 'array',
      of: [
        {
          type: 'ProcessList_array'
        }
      ]
    }
  ]
}

export const ProcessList_array = {
  name: 'ProcessList_array',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
    },
    {
      name: 'subheading',
      type: 'markdown',
      title: 'Subheading',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    },
  ]
}