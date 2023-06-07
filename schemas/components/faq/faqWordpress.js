export default {
  name: "faq_Wordpress",
  title: "FAQ Wordpress",
  type: 'object',
  fields: [
    {
      name: 'question',
      type: 'string'
    },
    {
      name: 'heading',
      type: 'markdown'
    },
    {
      name: 'paragraph',
      type: 'markdown'
    },
    {
      name: 'subheading',
      type: 'markdown'
    },
    {
      name: 'secondParagraph',
      type: 'markdown'
    },
    {
      name: 'cta',
      type: 'cta'
    },
    {
      name: 'summary',
      type: 'markdown'
    },
    {
      name: 'summaryCta',
      type: 'cta'
    },
  ],
}