export default {
  name: 'projektowanieUiPage',
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
      name: 'centralizedHeading',
      type: 'markdown',
      title: '1st centralized heading',
      fieldset: 'centralizedHeadings',
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: '1st cta section',
      fieldset: 'ctaSections',
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
      title: 'heading',
      fieldset: 'tilesComponentWithHeading'
    },
    {
      name: 'Image',
      type: 'image',
      title: '1st image',
      fieldset: 'imageSections',
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
      title: 'heading',
      fieldset: 'slider'
    },
    {
      name: 'textSection2',
      type: 'TextComponent',
      title: '2nd text section',
      fieldset: 'textSections',
    },
    {
      name: 'headerTitleDescriptionList',
      type: 'array',
      of: [
        {
          type: 'HeaderTitleDescriptionList',
        }
      ],
      title: 'list',
      fieldset: 'headerTitleDescriptionList',
    },
    {
      name: 'Image2',
      type: 'image',
      title: '2nd image',
      fieldset: 'imageSections',
    },
    {
      name: 'textSection3',
      type: 'TextComponent',
      title: '3rd text section',
      fieldset: 'textSections',
    },
    {
      name: 'ctaSection2',
      type: 'ctaSection',
      title: '2nd cta section',
      fieldset: 'ctaSections',
    },
    {
      name: 'textSection4',
      type: 'TextComponent',
      title: '4th text section',
      fieldset: 'textSections',
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
      title: '2nd centralized heading',
      fieldset: 'centralizedHeadings',
    },
    {
      name: 'caseStudies',
      type: 'cta',
      title: 'cta',
      fieldset: 'caseStudies',
    },
    {
      name: 'ctaSection3',
      type: 'ctaSection',
      title: '3rd cta section',
      fieldset: 'ctaSections',
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
    {
      name: 'tilesComponentWithHeading',
      title: 'Tiles component with heading'
    },
    {
      name: 'slider',
      title: 'slider'
    },
    {
      name: 'imageSections',
      title: 'image sections'
    },
    {
      name: 'process',
      title: 'Process'
    },
    {
      name: 'caseStudies',
      title: 'case studies'
    }
  ],
}