export default {
  name: "faq_Form",
  title: "Form",
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown'
    },
    {
      name: 'subheading',
      type: 'markdown'
    },
    {
      name: 'paragraph',
      type: 'markdown'
    },
    {
      name: 'person',
      type: 'reference',
      to: [{ type: 'teamMember' }],
      options: { disableNew: true },
    },
  ],
}