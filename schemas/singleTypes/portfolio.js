export default {
  name: 'portfolio',
	title: 'Portfolio',
  type: 'document',
  icon: () => '📑',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Hero Heading',
      group: 'hero',
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Hero paragraph',
      group: 'hero',
    },
    {
      name: 'caseStudies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [ { type: 'caseStudy_entries' } ],
          options: { disableNew: true },
        }
      ],
      title: 'Case Studies',
      group: 'caseStudies',
    },
    {
      name: 'quickForm',
      type: 'quickForm',
      title: 'Quick Form',
      group: 'quickForm',
    },
    {
      name: 'blogEntries_Heading',
      type: 'markdown',
      title: 'Blog Entries Heading',
      group: 'blogEntries',
    },
    {
      name: 'scrollToNext',
      type: 'scrollToNext',
      title: 'Scroll To Next Section',
      group: 'scrollToNext',
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
      name: 'caseStudies',
      title: 'Case Studies',
    },
    {
      name: 'quickForm',
      title: 'QuickForm',
    },
    {
      name: 'blogEntries',
      title: 'Blog Entries',
    },
    {
      name: 'scrollToNext',
      title: 'Scroll To Next',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}