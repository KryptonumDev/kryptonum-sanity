export default {
  name: 'marketing360Page',
  title: 'Marketing 360',
  type: 'document',
  icon: () => '📈',
  fields: [
    {
      name: 'hero',
      type: 'Hero',
      options: { collapsible: true, collapsed: false }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        { type: 'ctaSectionPill'},
        { type: 'ctaSection'},
        { type: 'HeadingImageBlocks'},
        { type: 'ProcessList'},
        { type: 'simpleCtaSection'},
        { type: 'CaseStudies'},
        { type: 'LatestBlogEntries'},
      ]
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
      name: 'scrollToNext',
      title: 'Scroll To Next'
    },
    {
      name: 'seo',
      title: 'SEO'
    }
  ]
}