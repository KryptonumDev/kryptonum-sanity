export default {
  name: 'uiDesignPage',
  title: 'Projektowanie UI',
  type: 'document',
  icon: () => '🎨',
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
      title: 'Image',
      fieldset: 'hero',
    },
    {
      name: 'textSection',
      type: 'TextComponent',
      title: 'Text Section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'centralizedHeading_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'centralizedHeading',
    },
    {
      name: 'centralizedHeading_SubHeading',
      type: 'markdown',
      title: 'Subheading',
      fieldset: 'centralizedHeading',
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Cta Section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'Tiles_tiles',
      type: 'TilesComponent',
      title: 'tiles',
      fieldset: 'tilesComponentWithHeading'
    },
    {
      name: 'Tiles_heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'tilesComponentWithHeading'
    },
    {
      name: 'Image',
      type: 'image',
      title: 'Image',
      fieldset: 'imageSection',
    },
    {
      name: 'slider_slides',
      type: 'array',
      of: [{
        type: 'titleAndDescription',
      }
      ],
      title: 'slides',
      fieldset: 'slider',
    },
    {
      name: 'slider_heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'slider'
    },
    {
      name: 'textSection2',
      type: 'TextComponent',
      title: 'Text Section 2',
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
      name: 'Image2',
      type: 'image',
      title: 'Image',
      fieldset: 'imageSection2',
    },
    {
      name: 'textSection3',
      type: 'TextComponent',
      title: 'Text Section 3',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'ctaSection2',
      type: 'ctaSection',
      title: 'Cta Section 2',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'textSection4',
      type: 'TextComponent',
      title: 'Text Section 4',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'process',
      type: 'array',
      of:[{
        type: 'titleAndDescription',
      }],
      title: 'Processes',
      fieldset: 'process',
    },
    {
      name: 'centralizedHeading2',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'centralizedHeading2',
    },
    {
      name: 'caseStudies',
      type: 'cta',
      title: 'Call to action',
      fieldset: 'caseStudies',
    },
    {
      name: 'ctaSection3',
      type: 'ctaSection',
      title: 'Cta Section 3',
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
      name: 'hero',
      title: 'Hero',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'imageSection',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'imageSection2',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'tiles',
      title: 'Tiles',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'centralizedHeading',
      title: 'Centralized Heading',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'centralizedHeading2',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'headerTitleDescriptionList',
      title: 'Header Title Description List',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'tilesComponentWithHeading',
      title: 'Tiles component with heading',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'slider',
      title: 'Slider',
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