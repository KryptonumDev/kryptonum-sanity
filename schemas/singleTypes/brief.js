export default {
  name: 'brief',
	title: 'Brief z Kryptonum',
  type: 'document',
  icon: () => '💼',
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
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Hero Paragraph',
      group: 'hero',
    },
    {
      name: 'hero_Paragraph2',
      type: 'markdown',
      title: 'Hero Second Paragraph',
      group: 'hero',
    },
    {
      name: 'hero_ScrollText',
      type: 'markdown',
      title: 'Hero Scroll Text',
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
      name: 'seo',
      title: 'SEO',
    },
  ]
}