export default {
  name: 'notFound',
	title: 'Not Found - 404',
  type: 'document',
  icon: () => '🚫',
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
      title: 'Hero Subheding',
      group: 'hero',
    },
    {
      name: 'hero_Cta',
      type: 'cta',
      title: 'Hero Cta',
      group: 'hero',
    },
    {
      name: 'hero_Img',
      type: 'img',
      title: 'Hero Image',
      group: 'hero',
    },
    {
      name: 'ctaSection_Heading',
      type: 'markdown',
      title: 'Call To Action Section Heading',
      group: 'cta',
    },
    {
      name: 'ctaSection_Cta',
      type: 'cta',
      title: 'Call To Action Section Button',
      group: 'cta',
    },
    {
      name: 'ctaSection_Img',
      type: 'img',
      title: 'Call To Action Section Image',
      group: 'cta',
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
  ]
}