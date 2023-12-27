export default {
  name: 'brandingPage',
  title: 'Branding',
  type: 'document',
  icon: () => '🏷️',
  fields: [
    {
      name: 'hero',
      type: 'Hero',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'textSection',
      type: 'TextComponent',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'call to action section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'tiles',
      type: 'TilesComponent',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'textSection2',
      type: 'TextComponent',
      title: '2nd text component',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'iconTitleBlocksList',
      type: 'array',
      of: [{type: 'IconTitleBlocks'}],
      title: 'List',
      fieldset: 'iconTitleBlocksList',
    },
    {
      name: 'centralizedHeading',
      type: 'CenteredHeading',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'iconTitleBlocksList2',
      type: 'array',
      of: [{type: 'IconTitleBlocks'}],
      title: 'List',
      fieldset: 'iconTitleBlocksList2',
    },
    {
      name: 'centralizedHeading2',
      type: 'CenteredHeading',
      title: '2nd centralized heading',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'textSection3',
      type: 'TextComponent',
      title: '3rd text section',
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
      title: '2nd call to action section',
      type: 'ctaSection',
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
      name: 'iconTitleBlocksList',
      title: 'Icon Title Blocks List',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'headerTitleDescriptionList',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'iconTitleBlocksList2',
      title: 'Icon Title Blocks List 2',
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