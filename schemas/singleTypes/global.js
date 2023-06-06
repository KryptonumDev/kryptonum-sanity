export default {
  name: 'global',
	title: 'Global',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      name: 'quickForm_Paragraph',
      type: 'string',
      title: 'Quick Form Paragraph',
      group: 'quickForm',
    },
    {
      name: 'quickForm_Person',
      type: 'reference',
      to: [{ type: 'team' }],
      options: { disableNew: true },
      title: 'Quick Form Person',
      group: 'quickForm',
    },
    {
      name: 'quickForm_Tel',
      type: 'string',
      title: 'Quick Form Tel',
      group: 'quickForm',
    },
    {
      name: 'faq',
      type: 'faq',
      title: 'FAQ',
      group: 'faq',
    },
  ],
  groups: [
    {
      name: 'quickForm',
      title: 'Quick Form',
    },
    {
      name: 'faq',
      title: 'FAQ',
    },
  ],
}