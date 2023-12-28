export default {
  name: 'BoardPage',
  title: "Samorządy",
  type: 'document',
  icon: () => '💼',
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
      name: 'hero',
      type: 'Hero',
      options: { collapsed: true }
    },
    {
      name: 'content',
      type: 'array',
      of: [
        { type: 'Slider'},
        { type: 'CenteredHeading'},
        { type: 'WindowsShowcase'},
        { type: 'TextComponent'},
        { type: 'CaseStudies' },
        { type: 'ProsAndConsShowcase'},
        { type: 'HeadingWithTitleAndImgList'},
        { type: 'HeadingWithIconDescriptionList'},
        { type: 'ImageShowcase'},
        { type: 'HeadingDescriptionWithBlocksList'},
        { type: 'ImageComponent'},
        { type: 'ProcessList'},
        { type: 'quickForm'},
      ]
    }
  ]
}