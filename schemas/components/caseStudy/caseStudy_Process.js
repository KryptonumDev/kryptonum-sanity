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
      name: 'keyElements',
      type: 'process_KeyElementsWrapper',
      title: 'Key Elements',
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'img'
    }
  }
}


export const caseStudy_ProcessArray = {
  name: "caseStudy_ProcessArray",
  title: "Proces Case Study",
  type: "object",
  fields: [
    {
      name: 'array',
      type: 'array',
      of: [
        { type: 'caseStudy_Process' },
        { type: 'caseStudy_Technology' },
        { type: 'caseStudy_VisualIdentification' },
        { type: 'caseStudy_Logo' },
      ],
      title: 'Lista'
    },
  ],
  preview: {
    select: {
      title: 'Proces Case Study',
      subtitle: 'array'
    },
    prepare({ title, subtitle }) {
      return {
        title: 'Proces Case Study',
        subtitle: subtitle.map(item => item.heading).join(', '),
      };
    }
  }
}