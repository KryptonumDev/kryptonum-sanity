export default {
  name: 'marketing360',
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
        { type: 'CaseStudies'}
      ]
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
      name: 'seo',
      title: 'SEO'
    },
  ]
}