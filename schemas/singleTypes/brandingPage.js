export default {
  name: 'brandingPage',
  title: 'Branding',
  type: 'document',
  icon: () => '🏷️',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'hero',
    },
    {
      name: 'hero_sideImage',
      type: 'image',
      title: 'sideImage',
      fieldset: 'hero',
    },
    {
      name: 'textSection',
      type: 'TextComponent',
      title: '1st text section',
      fieldset: 'textSections',
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: '1st cta section',
      fieldset: 'ctaSections',
    },
    {
      name: 'Tiles',
      type: 'TilesComponent',
      title: 'Tiles',
      fieldset: 'tiles'
    },
    {
      name: 'textSection2',
      type: 'TextComponent',
      title: '2nd text section',
      fieldset: 'textSections',
    },
    {
      name: 'iconTitleDescriptionGrid',
      type: 'ListWithOverflowIcon',
      title: '1st card list',
      fieldset: 'iconTitleDescriptionGrids',
    },
    {
      name: 'centralizedHeading',
      type: 'markdown',
      title: '1st heading',
      fieldset: 'centralizedHeadings',
    },
    {
      name: 'iconTitleDescriptionGrid2',
      type: 'ListWithOverflowIcon',
      title: '2nd card list',
      fieldset: 'iconTitleDescriptionGrids',
    },
    {
      name: 'centralizedHeading2',
      type: 'markdown',
      title: '2nd heading',
      fieldset: 'centralizedHeadings',
    },
    {
      name: 'textSection3',
      type: 'TextComponent',
      title: '3rd text section',
      fieldset: 'textSections',
    },
    {
      name: 'headerTitleDescriptionList',
      type: 'array',
      of: [
        {
          type: 'HeaderTitleDescriptionList'
        }
      ],
      title: 'List',
      fieldset: 'headerTitleDescriptionList'
    },
    {
      name: 'ctaSection2',
      type: 'ctaSection',
      title: '2nd cta section',
      fieldset: 'ctaSections',
    },
    {
      name: 'team_Heading',
      type: 'markdown',
      title: 'Team Heading',
      group: 'team',
    },
    {
      name: 'team_Text',
      type: 'text',
      rows: 8,
      title: 'Team Text',
      group: 'team',
    },
    {
      name: 'team_Cta',
      type: 'cta',
      title: 'Team Cta',
      group: 'team',
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
    },
    {
      name: 'textSections',
      title: 'Text Sections',
    },
    {
      name: 'ctaSections',
      title: 'Cta Sections'
    },
    {
      name: 'tiles',
      title: 'Tiles'
    },
    {
      name: 'iconTitleDescriptionGrids',
      title: 'card list'
    },
    {
      name: 'centralizedHeadings',
      title: 'Centralized Headings'
    },
    {
      name: 'headerTitleDescriptionList',
      title: 'header with description list'
    },

  ],
  groups: [
    {
      name: 'team',
      title: 'Team'
    },
    {
      name: 'seo',
      title: 'SEO'
    },
  ]
}