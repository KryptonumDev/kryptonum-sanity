export default {
  name: 'projektowanieUxPage',
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
      title: 'subHeading',
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
      name: 'titleDescriptionImageList',
      type: 'array',
      of: [{
        type: 'titleDescriptionAndImg'
      }],
      title: 'List',
      fieldset: 'titleDescriptionImageList',
    },
    {
      name: 'headingImageTextList',
      type: 'array',
      of: [{
        type: 'HeadingImageText'
      }],
      title: 'List',
      fieldset: 'headingImageTextList',
    },
    {
      name: 'ctaSection2',
      type: 'ctaSection',
      title: '2nd cta section',
      fieldset: 'ctaSections',
    },
    {
      name: 'textSection2',
      type: 'TextComponent',
      title: '2nd text section',
      fieldset: 'textSections',
    },
    {
      name: 'imageSection',
      type: 'image',
      title: 'image',
      fieldset: 'imageSections',
    },
    {
      name: 'textSection3',
      type: 'TextComponent',
      title: '3rd text section',
      fieldset: 'textSections',
    },
    {
      name: 'cardWithOverflowIcon',
      type: 'ListWithOverflowIcon',
      title: 'Card',
      fieldset: 'cardWithOverflowIcon'
    },
    {
      name: 'cardGrid',
      type: 'array',
      of: [{
        type: 'IconDescription'
      }],
      title: 'cards',
      fieldset: 'cardGrid'
    },
    {
      name: 'ctaSection3',
      type: 'ctaSection',
      title: '3rd cta section',
      fieldset: 'ctaSections',
    },
    {
      name: 'sustainableDevelopment_heading',
      type: 'markdown',
      title: 'heading',
      fieldset: 'sustainableDevelopment'
    },
    {
      name: 'sustainableDevelopment_blocks',
      type: 'titleAndDescription',
      title: 'blocks',
      fieldset: 'sustainableDevelopment'
    },
    {
      name: 'sustainableDevelopment_cardGrid',
      type: 'array',
      of: [{type:'markdown'}],
      title: 'cards',
      fieldset: 'sustainableDevelopment'
    },
    {
      name: 'consultationCta',
      type: 'quickForm',
      title: 'form',
      fieldset: 'consultationCta'
    },
    {
      name: 'headingWithIconTitleDescriptionList',
      type: 'HeadingWithIconTitleDescriptionList',
      title: '1st heading with icon description list',
      fieldset: 'headingWithIconDescriptionList'
    },
    {
      name: 'ImageDisplayedOnTablet',
      type: 'image',
      title: 'image',
      fieldset: 'imageDisplayedOnTablet',
    },
    {
      name: 'headingWithIconDescriptionList2',
      type: 'HeadingWithIconTitleDescriptionList',
      title: '2nd heading with icon description list',
      fieldset: 'headingWithIconDescriptionList'
    },
    {
      name: 'headingWithIconDescriptionList2_blocks',
      type: 'ListWithOverflowIcon',
      title: '2nd List',
      fieldset: 'headingWithIconDescriptionList'
    },
    {
      name: 'headingWithMaxWidth',
      type: 'markdown',
      title: 'heading',
      fieldset: 'headingWithMaxWidth'
    },
    {
      name: 'ctaSection4',
      type: 'ctaSection',
      title: '4th cta section',
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
      name: 'titleDescriptionImageList',
      title: 'title description image list'
    },
    {
      name: 'headingImageTextList',
      title: 'heading image text list'
    },
    {
      name: 'imageSections',
      title: 'image sections'
    },
    {
      name: 'cardWithOverflowIcon',
      title: 'card with overflow icon'
    },
    {
      name: 'cardGrid',
      title: 'card grid'
    },
    {
      name: 'sustainableDevelopment',
      title: 'sustainable development'
    },
    {
      name: 'consultationCta',
      title: 'consultation cta'
    },
    {
      name: 'headingWithIconDescriptionList',
      title: 'heading with icon description list'
    },
    {
      name: 'imageDisplayedOnTablet',
      title: 'image displayed on tablet'
    },
    {
      name: 'headingWithMaxWidth',
      title: 'heading with max width'
    },
  ],
}