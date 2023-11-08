export default {
  name: "Hero",
  title: 'hero',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      type: 'image'
    },
    {
      name: 'subheading',
      title: 'Subheading (optional)',
      type: 'markdown'
    },
    {
      name: 'sideImage',
      title: 'SideImage (optional)',
      type: 'image'
    }
  ]
}