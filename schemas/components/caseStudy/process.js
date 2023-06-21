export default {
  name: "caseStudy_Process",
  title: "Case Study Process",
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
      name: 'subheading',
      type: 'markdown',
      title: 'Subheading'
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph'
    },
    {
      name: 'paragraph2',
      type: 'markdown',
      title: 'Second Paragraph'
    },
    {
      name: 'principles_Paragraph',
      type: 'markdown',
      title: 'Principles Paragraph',
      initialValue: 'Kluczowe założenia:'
    },
    {
      name: 'principles_List',
      type: 'array',
      of: [ { type: 'string' } ],
      title: 'Principles List'
    },
    {
      name: 'keyElements_Paragraph',
      type: 'markdown',
      title: 'Key Elements Paragraph',
      initialValue: 'Znaki szczególne:'
    },
    {
      name: 'keyElements_List',
      type: 'array',
      of: [
        {
          type: 'process_KeyElements'
        }
      ],
      title: 'Key Elements List'
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'img'
    }
  }
}