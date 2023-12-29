export default {
  name: 'LandingPage',
  title: 'Strony lądowania',
  type: 'document',
  icon: () => '📜',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'hero',
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Paragraph',
      fieldset: 'hero',
    },
    {
      name: 'hero_Img',
      type: 'image',
      title: 'Image',
      fieldset: 'hero',
    },
    {
      name: 'content',
      type: 'array',
      of: [
        {type: 'Slider'},
        {type: 'CenteredHeading'},
        {type: 'WindowsShowcase'},
        {type: 'TextComponent'},
        {type: 'CaseStudies'},
        {type: 'ProsAndConsShowcase'},
        {type: 'HeadingWithTitleAndImgList'},
        {type: 'HeadingWithIconDescriptionList'},
        {type: 'ImageShowcase'},
        {type: 'HeadingDescriptionWithBlocksList'},
        {type: 'ImageComponent'},
        {type: 'ProcessList'},
        {type: 'quickForm'},
      ],
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
      options: {collapsible: true, collapsed: true},
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
    },
  },
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
}
