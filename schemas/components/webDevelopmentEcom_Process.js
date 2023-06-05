export default {
  name: "webDevelopmentEcom_Process",
  title: "Web Development Ecom Process",
  type: "object",
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
      name: 'secondParagraph',
      type: 'markdown',
      title: 'Second Paragraph',
    },
    {
      name: 'secondHeading',
      type: 'markdown',
      title: 'Second Heading',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'CallToAction',
    },
  ],
  preview: {
    select: {
      title: 'heading'
    }
  }
}