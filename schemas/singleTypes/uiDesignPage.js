export default {
  name: 'uiDesignPage',
  title: 'Projektowanie UI',
  type: 'document',
  icon: () => '🎨',
  fields: [
    {
      name: 'hero',
      type: 'Hero',
      options: { collapsible: true, collapsed: false }
    },
    {
      name: 'textSection',
      type: 'TextComponent',
      title: 'Text Section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'centralizedHeading',
      type: 'CenteredHeading',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'call to action section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'tilesWithHeading',
      type: 'TilesWithHeading',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      fieldset: 'imageSection',
    },
    {
      name: 'slider',
      type: 'Slider',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'textSection2',
      type: 'TextComponent',
      title: '2nd text section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'headerTitleDescriptionList',
      type: 'array',
      of: [
        {
          type: 'HeaderTitleDescriptionList',
        }
      ],
      title: 'List',
      fieldset: 'headerTitleDescriptionList',
    },
    {
      name: 'image2',
      type: 'image',
      title: 'Image',
      fieldset: 'imageSection2',
    },
    {
      name: 'textSection3',
      type: 'TextComponent',
      title: '3rd text section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'ctaSection2',
      type: 'ctaSection',
      title: '2nd call to action section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'textSection4',
      type: 'TextComponent',
      title: '4th text section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'blocks',
      type: 'array',
      of:[{
        type: 'titleAndDescription',
      }],
      title: 'Processes',
      fieldset: 'process',
    },
    {
      name: 'centralizedHeading2',
      title: '2nd centralized heading',
      type: 'CenteredHeading',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'caseStudies',
      type: 'CaseStudies',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'ctaSection3',
      type: 'ctaSection',
      title: '3rd call to action section',
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
    }
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
  ],

  fieldsets: [
    {
      name: 'imageSection',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'imageSection2',
      title: '2nd image section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'headerTitleDescriptionList',
      title: 'Header Title Description List',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'process',
      title: 'Process',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'caseStudies',
      title: 'Case studies',
      options: { collapsible: true, collapsed: true }
    }
  ],
}