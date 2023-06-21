export default {
  name: "process_KeyElements",
  title: "Process Key Elements",
  type: "object",
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading'
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph'
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'img'
    }
  }
}