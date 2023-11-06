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
      name: 'hero_Img',
      type: 'image',
      title: 'image',
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
          type: 'headerTitleDescriptionList'
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
}