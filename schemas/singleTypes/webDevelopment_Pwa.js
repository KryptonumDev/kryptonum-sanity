const astertiks = "*❋*";

export default {
  name: 'webDevelopment_Pwa',
	title: '├ Aplikacje internetowe',
  type: 'document',
  icon: () => '📱',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Hero Heading',
      group: 'hero',
      description: `To make an annotion simply use one enter between new lines of text. If you want to use asteriks, put (${astertiks})`
    },
    {
      name: 'hero_Annotation',
      type: 'markdown',
      title: 'Hero Annotation',
      group: 'hero',
      hidden: ({ parent }) => !parent.hero_Heading?.includes(`${astertiks}`)
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Hero paragraph',
      group: 'hero',
    },
    {
      name: 'hero_SecondParagraph',
      type: 'markdown',
      title: 'Hero Second Paragraph',
      group: 'hero',
    },
    {
      name: 'hero_Img',
      type: 'image',
      title: 'Hero Image',
      group: 'hero',
    },
    {
      name: 'hero_CtaHeading',
      type: 'markdown',
      title: 'Hero Cta Heading',
      group: 'hero',
    },
    {
      name: 'hero_Cta',
      type: 'cta',
      title: 'Hero Cta',
      group: 'hero',
    },
    {
      name: 'process_Heading',
      type: 'markdown',
      title: 'Process Heading',
      group: 'process',
    },
    {
      name: 'process_Paragraph',
      type: 'markdown',
      title: 'Process Paragraph',
      group: 'process',
    },
    {
      name: 'process_SecondParagraph',
      type: 'markdown',
      title: 'Process Second Paragraph',
      group: 'process',
    },
    {
      name: 'process_List',
      type: 'array',
      of: [
        {
          type: 'FiveItemsList',
        }
      ],
      validation: Rule => Rule.max(3),
      title: 'Process List',
      group: 'process',
    },
    {
      name: 'quickForm',
      type: 'quickForm',
      title: 'Quick Form',
      group: 'quickForm',
    },
    {
      name: 'customer_Heading',
      type: 'markdown',
      title: 'Customer Heading',
      group: 'customer',
    },
    {
      name: 'customer_WhatHeading',
      type: 'markdown',
      title: 'Customer "What" Heading',
      group: 'customer',
    },
    {
      name: 'customer_WhatList',
      type: 'array',
      of: [
        {
          type: 'titleAndDescription'
        }
      ],
      title: 'Customer "What" List',
      group: 'customer',
    },
    {
      name: 'customer_WhatParagraph',
      type: 'markdown',
      title: 'Customer "What" Paragraph',
      group: 'customer',
    },
    {
      name: 'customer_WhatSecondParagraph',
      type: 'markdown',
      title: 'Customer "What" Second Paragraph',
      group: 'customer',
    },
    {
      name: 'customer_WhoHeading',
      type: 'markdown',
      title: 'Customer "Who" Heading',
      group: 'customer',
    },
    {
      name: 'customer_WhoList',
      type: 'array',
      of: [
        {
          type: 'titleAndDescription'
        }
      ],
      title: 'Customer "Who" List',
      group: 'customer',
    },
    {
      name: 'customer_WhoAnnotation',
      type: 'markdown',
      title: 'Customer "Who" Annotation',
      group: 'customer',
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Call To Action Section',
      group: 'ctaSection',
    },
    {
      name: 'caseStudies_Heading',
      type: 'markdown',
      title: 'Case Studies Heading',
      group: 'caseStudies',
    },
    {
      name: 'blogEntries_Heading',
      type: 'markdown',
      title: 'Blog Entries Heading',
      group: 'blogEntries',
    },
    {
      name: 'scrollToNext',
      type: 'scrollToNext',
      title: 'Scroll To Next Section',
      group: 'scrollToNext',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  groups: [
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'process',
      title: 'Process',
    },
    {
      name: 'quickForm',
      title: 'Quick Form',
    },
    {
      name: 'ctaSection',
      title: 'Call To Action',
    },
    {
      name: 'customer',
      title: 'Customer',
    },
    {
      name: 'ctaSection',
      title: 'Call To Action',
    },
    {
      name: 'caseStudies',
      title: 'Case Studies',
    },
    {
      name: 'blogEntries',
      title: 'Blog Entries',
    },
    {
      name: 'scrollToNext',
      title: 'Scroll To Next',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}