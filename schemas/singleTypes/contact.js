export default {
  name: 'contact',
	title: 'Contact',
  type: 'document',
  icon: () => '📫',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Hero Heading',
      group: 'hero',
    },
    {
      name: 'hero_Subheading',
      type: 'markdown',
      title: 'Hero Subheading',
      group: 'hero',
    },
    {
      name: 'hero_Contact',
      type: 'array',
      of: [
        { type: 'contactPerson' }
      ],
      title: 'Hero Contact',
      group: 'hero',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  groups: [
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'cta',
      title: 'Call To Action',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}