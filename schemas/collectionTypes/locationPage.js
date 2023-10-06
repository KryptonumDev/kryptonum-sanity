export default {
  name: 'locationPage',
  title: 'Strona lokalizacyjna',
  type: 'document',
  icon: () => '🏙️',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'hero',
    },
    {
      name: 'hero_Subheading',
      type: 'markdown',
      title: 'Subheading',
      fieldset: 'hero',
    },
    {
      name: 'hero_List',
      type: 'array',
      of: [
        { type: 'string' }
      ],
      title: 'List',
      fieldset: 'hero',
    },
    {
      name: 'hero_Cta',
      type: 'cta',
      title: 'CTA',
      fieldset: 'hero',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        { type: 'CaseStudies' },
        { type: 'ctaSection' },
        { type: 'ImageShowcase' },
        { type: 'TeamSection' },
        { type: 'LatestTestimonials' },
        { type: 'simpleCtaSection' },
        { type: 'TextComponent' },
        { type: 'TextColumnComponent' },
        { type: 'ImageComponent' },
        { type: 'TilesComponent' },
        { type: 'CenteredHeading' },
        { type: 'titleDescriptionAndImg_Array' },
        { type: 'Process' },
        { type: 'LargeList' },
        { type: 'LogoShowcase' },
        { type: 'GridFloatingImg' },
      ]
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  fieldsets: [
    {
      name: 'hero',
      title: 'Hero',
      options: { collapsed: true }
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current'
    }
  },
  groups: [
    {
      name: 'seo',
      title: 'SEO'
    },
  ]
}