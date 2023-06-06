export default {
  name: "webDevelopmentSite_Process",
  title: "Web Development Site Process",
  type: "object",
  fields: [
    {
      name: 'claim',
      type: 'markdown',
      title: 'Claim',
    },
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
  ],
  preview: {
    select: {
      title: 'claim'
    }
  }
}