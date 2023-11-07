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
      title: 'Side Image',
      fieldset: 'hero',
    },
    {
      name: 'textSection',
      type: 'TextComponent',
      title: 'Text Section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Cta Section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'Tiles',
      type: 'TilesComponent',
      title: 'Tiles',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'textSection2',
      type: 'TextComponent',
      title: 'Text Section 2',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'iconTitleDescriptionGrid',
      type: 'array',
      of: [{type: 'IconTitleBlocks'}],
      title: 'List',
      fieldset: 'iconTitleDescriptionGrid',
    },
    {
      name: 'centralizedHeading_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'centralizedHeading',
    },
    {
      name: 'centralizedHeading_Cta',
      type: 'cta',
      title: 'Cta',
      fieldset: 'centralizedHeading',
    },
    {
      name: 'iconTitleDescriptionGrid2',
      type: 'array',
      of: [{type: 'IconTitleBlocks'}],
      title: 'List',
      fieldset: 'iconTitleDescriptionGrid2',
    },
    {
      name: 'centralizedHeading2',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'centralizedHeading2',
    },
    {
      name: 'centralizedHeading_Cta2',
      type: 'cta',
      title: 'Cta',
      fieldset: 'centralizedHeading2',
    },
    {
      name: 'textSection3',
      type: 'TextComponent',
      title: 'Text Section 3',
      options: { collapsible: true, collapsed: true }
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
      title: 'Cta Section 2',
      options: { collapsible: true, collapsed: true }
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
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'iconTitleDescriptionGrid',
      title: 'Icon Title Description Grid',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'centralizedHeading',
      title: 'Centralized Heading',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'headerTitleDescriptionList',
      title: 'Header With Description List',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'iconTitleDescriptionGrid2',
      title: 'Icon Title Description Grid 2',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'centralizedHeading2',
      title: 'Centralized Heading 2',
      options: { collapsible: true, collapsed: true }
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