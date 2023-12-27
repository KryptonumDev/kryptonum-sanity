export default {
  name: 'uxDesignPage',
  title: 'Projektowanie UX',
  type: 'document',
  icon: () => '📐',
  fields: [
    {
      name: 'hero',
      type: 'Hero',
      title: 'Heading',
      options: { collapsible: true, collapsed: true }
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
      title: '2nd call to action section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'textSection2',
      type: 'TextComponent',
      title: '2nd text component',
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
      title: '3rd text section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'cardWithOverflowIcon',
      type: 'ListWithOverflowIcon',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'cardGridWithCentralizedHeading',
      type: 'CardGridWithCentralizedHeading',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'ctaSection3',
      type: 'ctaSection',
      title: '3rd call to action section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'headingBlocksCardGrid',
      type: 'HeadingBlocksCardGrid',
      options: { collapsible: true, collapsed: true }
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
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'imageDisplayedOnTablet',
      type: 'image',
      title: 'Image',
      fieldset: 'imageDisplayedOnTablet',
    },
    {
      name: 'headingWithIconDescriptionList2',
      type: 'HeadingWithIconTitleDescriptionList',
      title: '2nd heading with icon description list',
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
      title: '4th call to action section',
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