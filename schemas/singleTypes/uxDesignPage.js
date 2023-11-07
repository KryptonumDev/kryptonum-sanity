export default {
  name: 'uxDesignPage',
  title: 'Projektowanie UX',
  type: 'document',
  icon: () => '📐',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'hero',
    },
    
    {
      name: 'hero_subheading',
      type: 'markdown',
      title: 'Sub Heading',
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
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Cta Section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'titleDescriptionImageList',
      type: 'array',
      of: [{
        type: 'titleDescriptionAndImg'
      }],
      title: 'List',
      fieldset: 'titleDescriptionImageList',
    },
    {
      name: 'headingImageBlocksList',
      type: 'array',
      of: [{
        type: 'HeadingImageBlocks'
      }],
      title: 'List',
      fieldset: 'headingImageBlocksList',
    },
    {
      name: 'ctaSection2',
      type: 'ctaSection',
      title: 'Cta Section 2',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'textSection2',
      type: 'TextComponent',
      title: 'Text Section 2',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'imageSection',
      type: 'image',
      title: 'Image',
      fieldset: 'imageSection',
    },
    {
      name: 'textSection3',
      type: 'TextComponent',
      title: 'Text Section 3',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'cardWithOverflowIcon',
      type: 'ListWithOverflowIcon',
      title: 'Card',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'cardGrid',
      type: 'array',
      of: [{
        type: 'IconDescription'
      }],
      title: 'List',
      fieldset: 'cardGrid'
    },
    {
      name: 'ctaSection3',
      type: 'ctaSection',
      title: 'Cta Section 3',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'sustainableDevelopment_heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'sustainableDevelopment'
    },
    {
      name: 'sustainableDevelopment_blocks',
      type: 'titleAndDescription',
      title: 'Blocks',
      fieldset: 'sustainableDevelopment'
    },
    {
      name: 'sustainableDevelopment_cardGrid',
      type: 'array',
      of: [{type:'markdown'}],
      title: 'Cards',
      fieldset: 'sustainableDevelopment'
    },
    {
      name: 'consultationCta',
      type: 'quickForm',
      title: 'Consultation Cta',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'headingWithIconTitleDescriptionList',
      type: 'HeadingWithIconTitleDescriptionList',
      title: 'Heading With Icon Description List',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'ImageDisplayedOnTablet',
      type: 'image',
      title: 'Image',
      fieldset: 'imageDisplayedOnTablet',
    },
    {
      name: 'headingWithIconDescriptionList2',
      type: 'HeadingWithIconTitleDescriptionList',
      title: 'Heading With Icon Description List 2',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'headingWithMaxWidth',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'headingWithMaxWidth'
    },
    {
      name: 'ctaSection4',
      type: 'ctaSection',
      title: 'Cta Section 4',
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
      name: 'titleDescriptionImageList',
      title: 'Title Description Image List',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'headingImageBlocksList',
      title: 'Heading Image Blocks List',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'imageSection',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'cardGrid',
      title: 'Card Grid',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'sustainableDevelopment',
      title: 'Sustainable Development',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'imageDisplayedOnTablet',
      title: 'Image Displayed On Tablet',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'headingWithMaxWidth',
      title: 'Heading With Max Width',
      options: { collapsible: true, collapsed: true }
    },
  ],
}