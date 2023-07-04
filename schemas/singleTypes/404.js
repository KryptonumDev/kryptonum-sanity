export default {
  name: 'notFound',
	title: '404',
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
      type: 'image',
      title: 'Hero Image',
      group: 'hero',
    },
    {
      name: 'curiosities_Heading',
      type: 'markdown',
      title: 'Curiosities Heading',
      group: 'curiosities',
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Call To Action Section',
      group: 'cta',
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
      name: 'curiosities',
      title: 'Curiosities',
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